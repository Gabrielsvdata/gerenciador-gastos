import json
import requests
from flask import current_app

def gerar_sugestoes_gastos(dados_financeiros_json):
    """
    Gera sugestões financeiras usando a API do OpenRouter.
    Requer IA_API_KEY no app.config ou nas variáveis de ambiente.
    """
    # 1) Carrega e valida a chave
    api_key = current_app.config.get("IA_API_KEY", "").strip()
    if not api_key or not api_key.startswith("sk-"):
        return "Desculpe, a chave da IA não está configurada corretamente."

    # 2) Formata os dados recebidos
    if not isinstance(dados_financeiros_json, (str, bytes)):
        dados_formatado = json.dumps(dados_financeiros_json, ensure_ascii=False, indent=2)
    else:
        dados_formatado = dados_financeiros_json

    # 3) Monta o prompt
    prompt = f"""
    Você é um assistente financeiro amigável que ajuda pessoas a entenderem melhor seus gastos e a encontrarem formas simples de cuidar do dinheiro. Fale sempre com educação, respeito e de forma clara, como um amigo que entende de finanças.

    Analise os dados financeiros abaixo e gere sugestões personalizadas para melhorar o controle de gastos, economizar e organizar a vida financeira. Siga as instruções:

    - Comece sempre com: "Olá! Com base nos seus dados financeiros, aqui vão algumas sugestões que podem te ajudar:"
    - Aponte possíveis categorias com gastos altos, mas sem julgamento.
    - Dê ideias simples para economizar (ex: cozinhar mais, cancelar algo pouco usado, rever assinaturas).
    - Traga 1 dica básica de educação financeira ou controle de orçamento.
    - Seja sempre positivo, prático e leve.
    - Se os dados estiverem incompletos, diga isso de forma gentil e convide o usuário a enviar mais detalhes.

    Dados fornecidos:
    {dados_formatado}
    """.strip()

    # 4) Endpoint e cabeçalhos do OpenRouter
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    # 5) Payload da requisição
    payload = {
        "model": "mistralai/mistral-7b-instruct",
        "messages": [
            {
                "role": "system",
                "content": (
                    "Você é um assistente financeiro gentil, acessível e confiável "
                    "que orienta usuários a lidarem melhor com o dinheiro."
                )
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    }

    # 6) Chamada à API
    try:
        response = requests.post(url, headers=headers, json=payload, timeout=30)
        data = response.json()

        current_app.logger.debug("DEBUG IA (OpenRouter): %s", json.dumps(data, indent=2, ensure_ascii=False))

        if "choices" in data and data["choices"]:
            return data["choices"][0]["message"]["content"]
        elif "error" in data:
            return f"Erro da IA: {data['error'].get('message', 'Erro desconhecido')}"
        else:
            return "A IA não retornou uma resposta válida."

    except Exception as e:
        current_app.logger.error(f"Erro ao chamar OpenRouter: {e}", exc_info=True)
        return f"Erro ao gerar sugestão com IA (OpenRouter): {e}"
