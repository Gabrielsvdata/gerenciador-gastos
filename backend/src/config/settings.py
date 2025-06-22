import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv("URL_DATABASE_DEV")
    IA_API_KEY = os.getenv("IA_API_KEY")
