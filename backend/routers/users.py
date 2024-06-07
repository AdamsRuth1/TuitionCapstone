from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend import models, database, schemas, utils, services
from backend.database import get_db
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.security.oauth2 import OAuth2PasswordBearer
from backend.database import SessionLocal

router = APIRouter()

user_service = services.UserService()

@router.post("/signup", response_model=schemas.User)
async def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = services.UserService.get_user_by_email(db, user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return services.UserService.create_user(db, user)


@router.get("/users/{user_id}", response_model=schemas.User)
async def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = services.UserService.get_user(db, user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@router.post("/signin", response_model=schemas.Token, operation_id="sign_in")
async def sign_in(form_data: schemas.SignIn, db: 
                  Session = Depends(get_db)):
    # Authenticate the user using the UserService instance
    user = user_service.authenticate_user(db, 
                                          form_data.email, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect email or password")

    # Create an access token for the authenticated user
    access_token = user_service.create_access_token(data={"sub": user.email})
    
    # Return the access token
    return {"access_token": access_token, "token_type": "bearer"}
    
