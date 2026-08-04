# imports the FastAPI framework
from fastapi import FastAPI

# creates the FastAPI application
app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome to the FleetIQ AI API!"}