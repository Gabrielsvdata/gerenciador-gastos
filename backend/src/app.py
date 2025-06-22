from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from src.config.settings import Config
from dotenv import load_dotenv
import os

db = SQLAlchemy()

def create_app():
    load_dotenv()  # Carrega variáveis do .env

    app = Flask(__name__)
    app.config.from_object(Config)

    # Carrega a chave da IA do .env
    app.config["IA_API_KEY"] = os.getenv("IA_API_KEY")

    db.init_app(app)
    CORS(app, resources={r"/*": {"origins": "*"}})

    # Importa os modelos
    from src.model.categoria_model import Categoria
    from src.model.transacao_model import Transacao

    with app.app_context():
        db.create_all()

    # Registra rotas
    from src.routes.main_routes import main_bp
    app.register_blueprint(main_bp)

    return app
