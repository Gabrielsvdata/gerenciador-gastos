
# 💰 Gerenciador de Gastos

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-2C003E?style=for-the-badge&logo=sqlalchemy&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

> **Controle suas finanças pessoais com inteligência!**  
> Cadastre transações, visualize gráficos, receba **sugestões inteligentes** de economia via IA e mantenha seu orçamento sempre saudável.

---

## ✨ Principais Funcionalidades

| Módulo | Descrição |
|--------|-----------|
| **Dashboard** | Gráficos de entradas x saídas usando Chart.js |
| **Categorias** | CRUD completo de categorias de gastos |
| **Transações** | CRUD completo de transações (entradas / saídas) |
| **Sugestão IA** | Serviço de IA (OpenAI) gera dicas personalizadas de economia |
| **Tema claro/escuro** | Toggle de tema global |
| **Responsivo** | Layout Mobile‑First com SASS |

---

## 🏗️ Arquitetura

```
React (Vite)           Flask API            MySQL (ou outro via URL)
    │  Axios  ───────▶  Blueprints           SQLAlchemy ORM
    │                   /ia/sugestoes ──▶    IA Service (OpenAI)
    │                               ▲
Chart.js ◀──────────────────────────┘
```

---

## 📂 Estrutura do Repositório

```
gerenciador-gastos/
├── backend/
│   ├── src/
│   │   ├── model/            # SQLAlchemy models
│   │   ├── routes/           # Rotas Flask
│   │   ├── services/ia_service.py
│   │   └── config/settings.py
│   ├── run.py
│   └── requirements.txt
└── frontend/
    └── gerenciador-gastos-front/
        ├── src/
        │   ├── components/
        │   └── pages/
        ├── index.html
        ├── vite.config.js
        └── package.json
```

---

## 🛠️ Tecnologias & Bibliotecas

### Frontend
- **React 19** + **Vite 6**
- **Axios** (requisições HTTP)
- **React‑Router‑DOM** (roteamento SPA)
- **Chart.js** + **react-chartjs-2** (gráficos)
- **SASS** para estilização

### Backend
- **Flask** + **Flask‑CORS**
- **Flask‑SQLAlchemy** (ORM)
- **Flasgger** (Swagger UI automática)
- **Requests** (consumo da API de IA)
- **dotenv** (variáveis de ambiente)

> **Banco de dados**: configurável via `URL_DATABASE_DEV` (MySQL, PostgreSQL ou SQLite).
>
> **IA**: serviço externo (ex. OpenAI) definido por `IA_API_KEY`.

---

## 🌐 API REST

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/categorias` | Lista todas as categorias |
| `POST` | `/categorias` | Cria nova categoria |
| `GET` | `/transacoes` | Lista transações |
| `POST` | `/transacoes` | Cria transação (entrada/saída) |
| `POST` | `/ia/sugestoes` | Recebe JSON financeiro e devolve texto com sugestões de economia via IA |

A documentação Swagger é exposta em `/docs`.

---

## 💻 Executar Localmente

### Pré‑requisitos
- **Node.js >= 18**
- **Python >= 3.11**
- **MySQL** (ou outra URL compatível)

### 1. Backend
```bash
# ativar virtualenv
cd backend
python -m venv venv
source venv/bin/activate  # Win: venv\Scripts\activate
pip install -r requirements.txt

# configurar .env
cp .env.example .env
# edite URL_DATABASE_DEV e IA_API_KEY

python run.py
```

### 2. Frontend
```bash
cd frontend/gerenciador-gastos-front
npm install
npm run dev
```

---

## 🚀 Deploy

### Frontend → **Vercel**
1. New Project → Import from GitHub
2. **Root Directory:** `frontend/gerenciador-gastos-front`
3. Build Command: `npm run build`
4. Output: `dist`

### Backend → **Render**
1. New Web Service → Import repo
2. **Root Directory:** `backend`
3. Build: `pip install -r requirements.txt`
4. Start Command: `python run.py`
5. Add env vars: `URL_DATABASE_DEV`, `IA_API_KEY`

> Após o deploy, defina `VITE_API_URL` no painel de env vars da Vercel apontando para a URL do backend Render.

---

## 📸 Prints & Demo

| Tela | Descrição |
|------|-----------|
| Dashboard | Visão geral dos gastos |
| Cadastro | Formulário de nova transação |
| IA | Sugestões de economia geradas em tempo real |

> ![image](https://github.com/user-attachments/assets/75aeca7e-4cfc-4b0f-b7aa-f23abc5fe32a)
> ![image](https://github.com/user-attachments/assets/598512c3-76bf-486b-9c53-a804b8b386d7)



## 🤝 Contribuição

1. Faça um fork 🍴
2. Crie sua branch: `git checkout -b feature/minha-feature`
3. Commit: `git commit -m 'feat: Minha feature'`
4. Push: `git push origin feature/minha-feature`
5. Abra um Pull Request ✔️

---

## 🪪 Licença
[MIT](LICENSE)

---

## 🙋‍♂️ Autor

**Gabriel Silvano Vieira** – [@gabriel-silvano-vieira](https://www.linkedin.com/in/gabriel-silvano-vieira-2615a618b/)

---

