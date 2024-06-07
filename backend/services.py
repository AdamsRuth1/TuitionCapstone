# services.py

from backend.database import get_db
from sqlalchemy.orm import Session
from backend import models, schemas, utils
import httpx
from httpx import ConnectTimeout, HTTPStatusError
from typing import List
from backend.schemas import Country
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
        return db.query(models.User).filter(models.User.email == email).first()

    @staticmethod
    def create_user(db: Session, user: schemas.UserCreate):
        hashed_password = utils.hash_password(user.password)
        db_user = models.User(
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
        return db.query(models.User).filter(models.User.id == user_id).first()

    def authenticate_user(self, db: Session, email: str, password: str):
        user = self.get_user_by_email(db, email)
        if not user or not utils.verify_password(password, user.hashed_password):
            return None
        return user

    def create_access_token(self, data: dict, expires_delta: Optional[timedelta] = None):
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        return encoded_jwt

    async def get_countries_service(self) -> List[Country]:
        try:
            async with httpx.AsyncClient(timeout=10.0) as client:  # Set a 10-second timeout
                response = await client.get("https://restcountries.com/v3.1/all")
                response.raise_for_status()  # Raise an error for bad status codes
                countries_data = response.json()
                countries = [
                    Country(name=country['name']['common'], code=country['cca2'])
                    for country in countries_data
                ]
                return countries
        except ConnectTimeout:
            print("The request timed out. Please try again later.")
            return []
        except HTTPStatusError as http_err:
            print(f"HTTP error occurred: {http_err}")
            return []
        except Exception as err:
            print(f"An error occurred: {err}")
            return []