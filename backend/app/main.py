from fastapi import FastAPI
from app.database import engine, SessionLocal
from app import models
from app.routers.router import router


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

app.include_router(router)
