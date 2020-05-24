const express = require('express');
const Article = require('./models/article.model');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ msg: 'articles' });
});

app.get('/api/v1/articles', async (req, res) => {
    const articles = await Article.find({});
    res.json(articles);
});

app.post('/api/v1/articles', async (req, res) => {
    const article = new Article({ name: req.body.name });
    const savedArticle = await article.save();
    res.json(savedArticle);
});

module.exports = app;
