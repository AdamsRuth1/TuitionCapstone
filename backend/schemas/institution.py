from pydantic import BaseModel

class InstitutionBase(BaseModel):
    school_name: str
    country_name: str  # Use country_name instead of country_code
    address: str
    payment_type: str

class InstitutionCreate(InstitutionBase):
    pass

class Institution(InstitutionBase):
    id: int

    class Config:
        orm_mode = True
