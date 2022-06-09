// const express = require('express');
// const router = express.Router();

const BooksService = require('../services/BooksService');

const getAllBook = async (_req, res) => {
  const books = await BooksService.getAllBook();

  return res.status(200).json(books);
}

const getBookById = async (req, res) => {
  const { id } = req.params;

  const book = await BooksService.getBookById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json(book);
}

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  console.log(req.body);

  const book = await BooksService.createBook({ title, author, pageQuantity });

  return res.status(200).json(book);
}

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const book = await BooksService.updateBook(id, { title, author, pageQuantity });

  if (!book) return res.status(404).json({ message: 'Book not found!' })

  return res.status(200).json({ message: 'Book updated!' });
};

const removeBook = async (req, res) => {
  const { id } = req.params;

  const book = await BooksService.removeBook(id);

  if (!book) return res.status(500).json({ message: 'Algo deu errado' })

  return res.status(200).json({ message: 'Book removed!' });
}

module.exports = {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  removeBook
};