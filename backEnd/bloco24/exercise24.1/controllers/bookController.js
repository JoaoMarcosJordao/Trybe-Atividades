// const express = require('express');
// const router = express.Router();

const BooksService = require('../services/BooksService');

// router.get('/books', async (_req, res) => {
//   try {
//     const books = await BooksService.getAllBook();

//     return res.status(200).json(books);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

const getAllBook = async (_req, res) => {
  const books = await BooksService.getAllBook();

  return res.status(200).json(books);
}

module.exports = {
  getAllBook
};