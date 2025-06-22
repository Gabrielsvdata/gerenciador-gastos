# backend/src/swagger_config.py
from flasgger import Swagger

def configure_swagger(app):
    Swagger(app, template={
        "swagger": "2.0",
        "info": {
            "title": "Gerenciador de Gastos com IA",
            "description": "API para gerenciar transações financeiras com integração à IA",
            "version": "1.0"
        },
        "basePath": "/",
        "schemes": ["http"]
    })
