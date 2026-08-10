# vehicle API routes
from fastapi import APIRouter
from database.connection import get_db_connection
  
router = APIRouter()

@router.post("/search")
def search_vehicles(search_criteria: dict):
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM vehicles;")
    vehicles = cursor.fetchall()
    print(vehicles)
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