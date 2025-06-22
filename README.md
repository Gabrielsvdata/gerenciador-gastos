
# 💰 Gerenciador de Gastos

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 📋 Descrição

Projeto Full Stack para controle financeiro pessoal. Permite o cadastro de entradas e saídas, categorias, e sugestões inteligentes com base no uso. O foco é ajudar o usuário a ter uma visão clara sobre seus gastos mensais.

---

## 📂 Estrutura do Projeto

```
gerenciador-gastos/
├── backend/                      # API REST com Flask
│   ├── src/
│   ├── run.py
│   └── requirements.txt
├── frontend/
│   └── gerenciador-gastos-front/  # Frontend com React + Vite
│       ├── index.html
│       ├── package.json
│       └── vite.config.js
```

---

## ⚙️ Tecnologias Utilizadas

### Frontend
- [React](https://reactjs.org)
- [Vite](https://vitejs.dev/)
- [JavaScript ES6+](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [SASS](https://sass-lang.com/)

### Backend
- [Flask](https://flask.palletsprojects.com/)
- [Python 3](https://www.python.org/)
- [Flask-Restx](https://flask-restx.readthedocs.io/)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)

---

## 🚀 Deploy

### 🔸 Frontend (Vercel)
1. Acesse [https://vercel.com](https://vercel.com)
2. Selecione o repositório do projeto
3. Configure o diretório como `frontend/gerenciador-gastos-front`
4. Deploy automático

### 🔸 Backend (Render)
1. Acesse [https://render.com](https://render.com)
2. Novo Web Service → escolha o repositório
3. Configure o root como `backend`
4. Comando para start:
   ```
   python run.py
   ```
5. Configure as variáveis ambiente necessárias (.env)

---

## 🧪 Como rodar localmente

### Backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate   # Windows
pip install -r requirements.txt
python run.py
```

### Frontend:
```bash
cd frontend/gerenciador-gastos-front
npm install
npm run dev
```

---

## 🖼️ Tela inicial (exemplo)

> Adicione aqui um print do dashboard com entradas e saídas.

---

## 🙌 Autor

Gabriel Silvano Vieira  
🔗 [LinkedIn](https://www.linkedin.com/in/gabriel-silvano-vieira-2615a618b/)

