from fastapi import APIRouter
from typing import List
from backend.schemas import Country
from backend.services import UserService


router = APIRouter()
user_service = UserService()

@router.get("/countries", response_model=List[Country])
async def get_countries():
    return await user_service.get_countries_service()