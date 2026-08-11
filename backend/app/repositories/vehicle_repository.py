from backend.app.database.connection import get_db_connection

# Retrieves vehicles from the PostgreSQL database
def get_all_vehicles():
    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute("SELECT * FROM vehicles;")
    vehicles = cursor.fetchall()

    cursor.close()
    connection.close()

    return vehicles