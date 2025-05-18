# PRJ_BackendNews Tech&Games 

Este é o backend do projeto **PRJ_News**, criado com **Node.js + Express**, com a função de intermediar as chamadas para a [NewsAPI](https://newsapi.org/) e proteger a chave de API.

## Funcionalidades

- Rota única: `/api/news`
- Suporta:
  - Listagem por categoria (`?category=technology`)
  - Busca por palavra-chave (`?q=angular`)
- Garante segurança da chave de API com uso de variáveis de ambiente (`.env`)
- Habilita CORS para acesso pelo frontend

## Tecnologias

- Node.js
- Express
- dotenv
- node-fetch
- CORS
- Render (hospedagem)

## Variáveis de ambiente

- Crie um arquivo `.env` na raiz com:

- NEWS_API_KEY=sua-chave-da-newsapi

##  Como rodar localmente

```bash
git clone [https://github.com/seu-usuario/techgames-backend.git](https://github.com/DevAnaBeatriz/PRJ_BackendNews.git)
cd PRJ_BackendNews
npm install
node index.js
Acesse: http://localhost:3000/api/news
```
## Produção
- Hospedado em:
- https://prj-backendnews.onrender.com/api/news
