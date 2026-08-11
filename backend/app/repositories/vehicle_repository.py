from backend.app.database.connection import get_db_connection
from backend.app.schemas.vehicle import VehicleSearchRequest

# Retrieves vehicles from the PostgreSQL database
def get_all_vehicles(search_criteria: VehicleSearchRequest):
    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
    """
    SELECT *
    FROM vehicles
    WHERE LOWER(make) = LOWER(%s)
      AND LOWER(model) = LOWER(%s)
      AND year = %s
      AND mileage <= %s;
    """,
    (
        search_criteria.make,
        search_criteria.model,
        int(search_criteria.year),
        int(search_criteria.maximumMileage),
    ),
)
    vehicles = cursor.fetchall()

    cursor.close()
    connection.close()

    return vehicles