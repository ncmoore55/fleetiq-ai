# Backend Application from FastAPI
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# allow the React frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to the FleetIQ AI API!"}

@app.post("/search")
def search_vehicles(search_criteria: dict):
    return [
        {
            "make": search_criteria["make"],
            "model": search_criteria["model"],
            "year": search_criteria["year"],
            "maximumMileage": "42000",
        },
        {
            "make": search_criteria["make"],
            "model": search_criteria["model"],
            "year": search_criteria["year"],
            "maximumMileage": "58000",
        },
        {
            "make": search_criteria["make"],
            "model": search_criteria["model"],
            "year": search_criteria["year"],
            "maximumMileage": "71000",
        },
    ]