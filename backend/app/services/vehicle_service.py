from backend.app.repositories.vehicle_repository import get_all_vehicles
from backend.app.schemas.vehicle import VehicleSearchRequest


# Retrieves and prepares vehicles matching the user's search criteria
def get_vehicle_search_results(search_criteria: VehicleSearchRequest):
    vehicles = get_all_vehicles(search_criteria)

    return [
        {
            "make": vehicle[1],
            "model": vehicle[2],
            "year": str(vehicle[3]),
            "maximumMileage": str(vehicle[4]),
        }
        for vehicle in vehicles
    ]