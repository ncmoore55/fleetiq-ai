from fastapi import APIRouter
from backend.app.services.vehicle_service import get_vehicle_search_results

router = APIRouter()


# Handles vehicle search requests
@router.post("/search")
def search_vehicles(search_criteria: dict):
    return get_vehicle_search_results()