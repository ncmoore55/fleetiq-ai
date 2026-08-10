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

    return [
        {
            "make": vehicle[1],
            "model": vehicle[2],
            "year": str(vehicle[3]),
            "maximumMileage": str(vehicle[4]),
        }
        for vehicle in vehicles
    ]