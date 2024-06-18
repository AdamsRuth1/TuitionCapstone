from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import schemas, services
from ..database import get_db

router = APIRouter()

@router.post("/institutions/", response_model=schemas.Institution)
def create_institution(institution: schemas.InstitutionCreate, db: Session = Depends(get_db)):
    return services.InstitutionService.create_institution(db, institution)

@router.get("/institutions/", response_model=list[schemas.Institution])
def read_institutions(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    institutions = services.InstitutionService.get_institutions(db, skip=skip, limit=limit)
    return institutions

@router.get("/institutions/{institution_id}", response_model=schemas.Institution)
def read_institution(institution_id: int, db: Session = Depends(get_db)):
    db_institution = services.InstitutionService.get_institution(db, institution_id)
    if db_institution is None:
        raise HTTPException(status_code=404, detail="Institution not found")
    return db_institution
