from fastapi import FastAPI
import uvicorn
import logging
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from backend.routers import users, auth, countries, institution
from backend.database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
<<<<<<< HEAD
    "http://localhost",
    "http://localhost:8000",
    "http://127.0.0.1:5500",
=======
    "http://127.0.0.1:5500",
    "https://mole-relevant-salmon.ngrok-free.app",
    "*"
>>>>>>> made few changes
]

app.add_middleware(
    CORSMiddleware,
<<<<<<< HEAD
    allow_origins=origins,
=======
    allow_origins=origins,  # Or list specific origins (e.g., your frontend URL)
>>>>>>> made few changes
    allow_credentials=True,
    allow_methods=["*"],  # Make sure to include "OPTIONS"
    allow_headers=["*"],
)

logging.basicConfig(filename='api.log', level=logging.INFO,
                    format='%(asctime)s %(message)s')
logger = logging.getLogger(__name__)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info(f"Request: {request.method} {request.url}")
    response = await call_next(request)
    logger.info(f"Response status: {response.status_code}")
    logger.info(f"Response headers: {response.headers}")

    # Log response body if it's not a StreamingResponse
    if hasattr(response, 'body'):
        logger.info(f"Response body: {response.body}")
    else:
        logger.info("Response body: Streaming response - not logged")

    return response

app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(countries.router, prefix="/api/countries", tags=["countries"])
app.include_router(institution.router, prefix="/api/institution", tags=["institution"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the API"}
<<<<<<< HEAD
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routers import users, auth
from backend.database import engine, Base

Base.metadata.create_all(bind=engine)


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])


@app.get("/")
def read_root():
    return {"message": "Welcome to the API"}
=======

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
>>>>>>> made few changes
