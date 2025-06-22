from src.app import db

class Categoria(db.Model):
    __tablename__ = "categorias"

    id   = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(80), unique=True, nullable=False)

    def to_dict(self):
        return {"id": self.id, "nome": self.nome}
