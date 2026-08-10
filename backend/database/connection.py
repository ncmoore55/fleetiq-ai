import os
import psycopg

# creates a connection to the fleetiq postgresql database
def get_db_connection():
    return psycopg.connect(
        host="localhost",
        dbname="fleetiq",
        user="postgres",
        password=os.getenv("FLEETIQ_DB_PASSWORD"),
    )



