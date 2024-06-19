from backend.database import Base
from .users import User
from .institution import Institution
from .contact import Contact

__all__ = ["Base", "User", "Institution", "Contact"]
# This ensures that Institution and User schemas are accessible from the schemas module