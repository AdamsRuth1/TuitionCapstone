from sqlalchemy.orm import Session
from ..models import Institution
from ..schemas import InstitutionCreate

class InstitutionService:
    @staticmethod
    def create_institution(db: Session, institution: InstitutionCreate):
        db_institution = Institution(
            school_name=institution.school_name,
            country_name=institution.country_name,  # Use country_name
            address=institution.address,
            payment_type=institution.payment_type,
        )
        db.add(db_institution)
        db.commit()
        db.refresh(db_institution)
        return db_institution

    @staticmethod
    def get_institutions(db: Session, skip: int = 0, limit: int = 100):
        return db.query(Institution).offset(skip).limit(limit).all()

    @staticmethod
    def get_institution(db: Session, institution_id: int):
        return db.query(Institution).filter(Institution.id == institution_id).first()
