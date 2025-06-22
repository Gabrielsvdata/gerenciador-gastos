# backend/src/middleware/mock_usuario.py
from flask import g

def init_mock(app):
    @app.before_request
    def mock_usuario():
        g.usuario = {"id": 1, "nome": "Gabriel"}
