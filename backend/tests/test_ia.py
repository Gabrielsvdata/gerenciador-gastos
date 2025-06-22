# backend/tests/test_ia.py
import json

def test_sugestoes(client):
    resposta = client.post("/ia/sugestoes", json={
        "gastos": [
            {"categoria": "Lazer", "valor": 300},
            {"categoria": "Transporte", "valor": 100}
        ]
    })
    assert resposta.status_code == 200
    data = resposta.json
    assert "sugestões" in data or "Olá" in resposta.get_data(as_text=True)
