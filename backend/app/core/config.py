import os
from pathlib import Path

from dotenv import load_dotenv


# Points to the backend folder
BASE_DIR = Path(__file__).resolve().parents[2]

# Loads environment variables from backend/.env
load_dotenv(BASE_DIR / ".env")


DB_HOST = os.getenv("FLEETIQ_DB_HOST")
DB_PORT = os.getenv("FLEETIQ_DB_PORT")
DB_NAME = os.getenv("FLEETIQ_DB_NAME")
DB_USER = os.getenv("FLEETIQ_DB_USER")
DB_PASSWORD = os.getenv("FLEETIQ_DB_PASSWORD")