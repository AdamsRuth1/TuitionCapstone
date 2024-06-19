from sqlalchemy.orm import Session
from ..models import Institution
from ..schemas import InstitutionCreate
# from .email import send_confirmation_email

class InstitutionService:
    @staticmethod
    def create_institution(db: Session, institution: InstitutionCreate):
        db_institution = Institution(
            schoolName=institution.school_name,
            countryName=institution.country_name,  # Use country_name
            address=institution.address,
            paymentType=institution.payment_type,
            contactEmail=institution.contact_email
        )
        db.add(db_institution)
        db.commit()
        db.refresh(db_institution)

        # send_confirmation_email(institution.contact_email, institution.school_name)
        return db_institution

    @staticmethod
    def get_institutions(db: Session, skip: int = 0, limit: int = 100):
        return db.query(Institution).offset(skip).limit(limit).all()

    @staticmethod
    def get_institution(db: Session, institution_id: int):
        return db.query(Institution).filter(Institution.id == institution_id).first()
