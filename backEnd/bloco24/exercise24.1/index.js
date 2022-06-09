const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const bookController = require('./controllers/bookController')

app.use(express.json());

app.use('/', bookController );

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}!`))