from backend.models import users as user_models
from backend.schemas import users as user_schemas
from backend.services import users as user_services
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import logging
from backend import database, utils
from backend.database import get_db
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.security.oauth2 import OAuth2PasswordBearer
from backend.database import SessionLocal

router = APIRouter()

user_service = user_services.UserService()

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

@router.post("/signup", response_model=user_schemas.User)
async def create_user(user: user_schemas.UserCreate, db: Session = Depends(get_db)):
    try:
        logger.info(f"Received data: {user}")
        db_user = user_service.get_user_by_email(db, user.email)
        if db_user:
            raise HTTPException(status_code=400, detail="Email already registered")
        created_user = user_service.create_user(db, user)
        logger.info(f"Created user: {created_user}")
        return created_user
    except HTTPException as e:
        logger.error(f"HTTP Exception: {e.detail}")
        raise e
    except Exception as e:
        logger.error(f"Unhandled Exception: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

@router.get("/users/{user_id}", response_model=user_schemas.User)
async def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = user_service.get_user(db, user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@router.post("/signin", response_model=user_schemas.Token, operation_id="sign_in")
async def sign_in(form_data: user_schemas.SignIn, db: Session = Depends(get_db)):
    # Authenticate the user using the UserService instance
    user = user_service.authenticate_user(db, form_data.email, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect email or password")

    # Create an access token for the authenticated user
    access_token = user_service.create_access_token(data={"sub": user.email})
    
    # Return the access token
    return {"access_token": access_token, "token_type": "bearer"}
