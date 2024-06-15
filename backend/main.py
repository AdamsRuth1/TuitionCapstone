import uvicorn
import logging
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from backend.routers import users, auth, countries, institution
from backend.database import engine, Base

# Create the database tables
Base.metadata.create_all(bind=engine)

# Initialize the FastAPI app
app = FastAPI()

# Set up allowed origins for CORS
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://127.0.0.1:5500",
    "https://mole-relevant-salmon.ngrok-free.app",
    "*"
]

# Configure CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Or list specific origins (e.g., your frontend URL)
    allow_credentials=True,
    allow_methods=["*"],  # Make sure to include "OPTIONS"
    allow_headers=["*"],
)

# Set up logging
logging.basicConfig(filename='api.log', level=logging.INFO, format='%(asctime)s %(message)s')
logger = logging.getLogger(__name__)

# Middleware to log requests and responses
@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info(f"Request: {request.method} {request.url}")
    response = await call_next(request)
    logger.info(f"Response status: {response.status_code}")
    logger.info(f"Response headers: {response.headers}")

    return response

# Include routers
app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(countries.router, prefix="/api/countries", tags=["countries"])
app.include_router(institution.router, prefix="/api/institution", tags=["institution"])

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the API"}

# Run the application
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
