# Backend Application from FastAPI
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome to the FleetIQ AI API!"}

@app.post("/search")
def search_vehicles(search_criteria: dict):
    return search_criteria