const express = require('express');
const app = express();

const jogos = require('./routes/gameRoute');

app.use(express.json());
app.use('/', jogos);

module.exports = app;