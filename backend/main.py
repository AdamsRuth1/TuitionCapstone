from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routers import users, auth
from backend.database import engine, Base
from backend.routers import countries

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
app.include_router(countries.router, prefix="/api/countries", tags=["countries"])


@app.get("/")
def read_root():
    return {"message": "Welcome to the API"}
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
