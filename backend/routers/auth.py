# backend/routers/auth.py
import openai
from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from backend import schemas, services
from backend.database import get_db
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.security.oauth2 import OAuth2PasswordBearer
from jose import jwt
from datetime import datetime, timedelta
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
if api_key is None:
    raise ValueError("No OPENAI_API_KEY found in environment variables")

client = OpenAI(api_key=api_key)


router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/signin")

@router.post("/signin", response_model=schemas.Token)
async def sign_in(form_data: schemas.SignIn, db: Session = Depends(get_db)):
    user = services.UserService().authenticate_user(db, form_data.email, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = services.UserService.create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/auth/google/callback")
async def google_oauth_callback(code: str, db: Session = Depends(get_db)):
    try:
        # Exchange authorization code for access token
        # Make a request to Google's token endpoint
        # Retrieve user information using the access token
        # Verify authenticity of the access token
        # Extract relevant user data (e.g., email, user ID)
        # Create or update user records in the database

        # For demonstration purposes, let's assume we have retrieved user data
        user_email = "akinnuoyet@gmail.com"
        user_id = 123

        # Generate JWT token
        access_token_expires = timedelta(minutes=30)
        access_token_data = {
            "sub": user_email,
            "user_id": user_id,
            "exp": datetime.utcnow() + access_token_expires
        }
        # Use a secure secret key for encoding the JWT token
        secret_key = "your-secret-key"
        access_token = jwt.encode(access_token_data, 
                                  secret_key, algorithm="HS256")

        return {"access_token": access_token, "token_type": "bearer"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))



@router.post("/signin/google")
async def google_sign_in(token: str, db: Session = Depends(get_db)):
    # Verify token with Google's OAuth 2.0 API
    # Retrieve user information and check if user exists in your database
    # If not, create a new user
    # Return JWT token
    pass

@router.post("/signin/apple")
async def apple_sign_in(token: str, db: Session = Depends(get_db)):
    # Verify token with Apple's OAuth 2.0 API
    # Retrieve user information and check if user exists in your database
    # If not, create a new user
    # Return JWT token
    pass


@router.post("/chat")
async def chat(request: Request):
    try:
        data = await request.json()
        user_input = data.get("message")
        if not user_input:
            raise HTTPException(status_code=400, detail="Message is required")
        print("Received user input:", user_input)

        # Choose a valid replacement model
        model_name = "gpt-3.5-turbo-instruct"

        response = client.completions.create(
            model=model_name,
            prompt=user_input,
            max_tokens=150
        )
        generated_response = response['choices'][0]['text'].strip()
        print("Generated response:", generated_response)
        return {"response": generated_response}
    except Exception as e:
        print("Error occurred:", e)
        raise HTTPException(status_code=500, detail=str(e))