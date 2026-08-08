# vehicle API routes
from fastapi import APIRouter

router = APIRouter()

@router.post("/search")
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