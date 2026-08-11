from backend.app.repositories.vehicle_repository import get_all_vehicles


# Retrieves vehicle data and prepares it for the API response
def get_vehicle_search_results():
    vehicles = get_all_vehicles()

    return [
        {
            "make": vehicle[1],
            "model": vehicle[2],
            "year": str(vehicle[3]),
            "maximumMileage": str(vehicle[4]),
        }
        for vehicle in vehicles
    ]