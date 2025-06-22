# backend/src/model/sugestao_model.py
from datetime import datetime
from . import db

class Sugestao(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    texto = db.Column(db.Text, nullable=False)
    data = db.Column(db.DateTime, default=datetime.utcnow)
