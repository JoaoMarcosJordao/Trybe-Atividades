const { Book } = require('../models')

const getAllBook = async () => {
  const books = await Book.findAll();

  return books;
}

module.exports = {
  getAllBook,
}