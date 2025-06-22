import json
import requests
from flask import current_app

def gerar_sugestoes_gastos(dados_financeiros_json):
    api_key = current_app.config.get("IA_API_KEY")
    if not api_key:
        return "Desculpe, a chave da IA não está configurada."

    if not isinstance(dados_financeiros_json, (str, bytes)):
        dados_formatado = json.dumps(dados_financeiros_json, ensure_ascii=False, indent=2)
    else:
        dados_formatado = dados_financeiros_json

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
    """

    try:
        response = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            },
            json={
                "model": "mistralai/mistral-7b-instruct",
                "messages": [
                    {
                        "role": "system",
                        "content": "Você é um assistente financeiro gentil, acessível e confiável que orienta usuários a lidarem melhor com seu dinheiro com base em seus hábitos de consumo."
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            }
        )

        data = response.json()
        current_app.logger.debug("DEBUG IA: %s", json.dumps(data, indent=2, ensure_ascii=False))

        if "choices" in data:
            return data["choices"][0]["message"]["content"]
        elif "error" in data:
            return f"Erro da IA: {data['error'].get('message', 'Erro desconhecido')}"
        else:
            return "A IA não retornou uma resposta válida."

    except Exception as e:
        current_app.logger.error(f"Erro ao chamar IA OpenRouter: {e}", exc_info=True)
        return f"Erro ao gerar sugestão com IA: {e}"
