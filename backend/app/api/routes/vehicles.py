from fastapi import APIRouter

from backend.app.services.vehicle_service import get_vehicle_search_results
from backend.app.schemas.vehicle import VehicleSearchRequest

router = APIRouter()


# Handles and validates vehicle search requests
@router.post("/search")
def search_vehicles(search_criteria: VehicleSearchRequest):
    return get_vehicle_search_results(search_criteria)