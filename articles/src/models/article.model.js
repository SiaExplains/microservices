const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    name: String,
    type: { type: String, default: 'article' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', ArticleSchema);
