from pydantic import BaseModel

# defines and validates the vehicle search data received by the API
class VehicleSearchRequest(BaseModel):
    make: str
    model: str
    year: str
    maximumMileage: str