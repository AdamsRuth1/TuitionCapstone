from sqlalchemy import Column, Integer, String
from backend.database import Base


class Institution(Base):
    __tablename__ = "institutions"

    id = Column(Integer, primary_key=True, index=True)
    school_name = Column(String, index=True)
    country_name = Column(String, index=True)  # Use country_name
    address = Column(String)
    payment_type = Column(String)
