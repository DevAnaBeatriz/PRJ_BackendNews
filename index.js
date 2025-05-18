const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env['NEWS_API_KEY'];

if (!API_KEY) {
  console.error(' NEWS_API_KEY não está definida no .env');
}

app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend Tech&Games ativo!');
});

app.get('/api/news', async (req, res) => {
  const query = req.query.q;
  const category = req.query.category;

  let url = `https://newsapi.org/v2/${query ? 'everything' : 'top-headlines'}?apiKey=${API_KEY}`;

  if (!query) {
    url += '&country=us';
  }

  if (category && !query) {
    url += `&category=${category}`;
  }

  if (query) {
    url += `&q=${query}`;
  }

  console.log('🔗 URL final:', url);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'ok') {
      console.error('Erro da API:', data);
      return res.status(500).json({ error: 'Erro da NewsAPI', details: data });
    }

    res.json(data);
  } catch (err) {
    console.error('Erro ao buscar notícias:', err);
    res.status(500).json({ error: 'Erro ao buscar notícias' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
