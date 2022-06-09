const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const bookController = require('./controllers/bookController')

app.use(express.json());

app.get('/books', bookController.getAllBook );

app.get('/books/:id', bookController.getBookById );

app.post('/books', bookController.createBook );

app.put('/books/:id', bookController.updateBook);

app.delete('/books/:id', bookController.removeBook);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}!`))