const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.NEWS_API_KEY;

app.get('/api/news', async (req, res) => {
  const category = req.query.category;
  const q = req.query.q;

  let url = `https://newsapi.org/v2/${q ? 'everything' : 'top-headlines'}?country=us&apiKey=${API_KEY}`;
  if (category) url += `&category=${category}`;
  if (q) url += `&q=${q}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar notícias' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
