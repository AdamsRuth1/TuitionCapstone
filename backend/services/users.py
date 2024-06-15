from backend.database import get_db
from backend.models import users
from sqlalchemy.orm import Session
from backend import utils
import httpx
from fastapi.responses import JSONResponse
from httpx import ConnectTimeout, HTTPStatusError
from typing import List
from backend.schemas import users as user_schemas  # Import schemas correctly
from datetime import datetime, timedelta
from jose import JWTError, jwt
from typing import Optional
import os

SECRET_KEY = os.getenv("SECRET_KEY", "mysecret")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


class UserService:
    @staticmethod
    def get_user_by_email(db: Session, email: str):
        return db.query(users.User).filter(users.User.email == email).first()

    @staticmethod
    def create_user(db: Session, user: user_schemas.UserCreate):  # Use the correct import
        hashed_password = utils.hash_password(user.password)
        db_user = users.User(
            email=user.email,
            first_name=user.first_name,
            last_name=user.last_name,
            hashed_password=hashed_password,
            phone_number=user.phone_number
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user

    @staticmethod
    def get_user(db: Session, user_id: int):
        return db.query(users.User).filter(users.User.id == user_id).first()

    @staticmethod
    def authenticate_user(db: Session, email: str, password: str):
        user = UserService.get_user_by_email(db, email)
        if not user or not utils.verify_password(password, user.hashed_password):
            return None
        return user

    @staticmethod
    def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        return encoded_jwt

