from flask import Blueprint, request, jsonify
from src.app import db
from src.model.categoria_model import Categoria
from src.model.transacao_model import Transacao
from src.services.ia_service import gerar_sugestoes_gastos  # ✅ importar aqui

main_bp = Blueprint("main", __name__)

# ---------- Categorias ----------
@main_bp.route("/categorias", methods=["GET"])
def listar_categorias():
    return jsonify([c.to_dict() for c in Categoria.query.all()])

@main_bp.route("/categorias", methods=["POST"])
def criar_categoria():
    data = request.get_json()
    cat = Categoria(nome=data["nome"])
    db.session.add(cat)
    db.session.commit()
    return cat.to_dict(), 201

# ---------- Transações ----------
@main_bp.route("/transacoes", methods=["GET"])
def listar_transacoes():
    return jsonify([t.to_dict() for t in Transacao.query.all()])

@main_bp.route("/transacoes", methods=["POST"])
def criar_transacao():
    data = request.get_json()
    campos = {"descricao", "valor", "tipo", "categoria_id"}
    if not data or not campos.issubset(data):
        return {"msg": "Campos faltando"}, 400
    t = Transacao(**{k: data[k] for k in campos})
    db.session.add(t)
    db.session.commit()
    return t.to_dict(), 201

# ---------- IA: Sugestões de Gastos ----------
@main_bp.route("/ia/sugestoes", methods=["POST"])
def sugestoes_ia():
    dados = request.get_json()
    sugestao = gerar_sugestoes_gastos(dados)
    return jsonify({"sugestao": sugestao})
