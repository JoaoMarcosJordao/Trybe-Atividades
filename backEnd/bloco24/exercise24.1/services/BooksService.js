const { Book } = require('../models')

const getAllBook = async () => {
  const books = await Book.findAll();

  return books;
}

const getBookById = async (id) => {
  const books = await Book.findByPk(id);

  return books;
}

const createBook = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author,pageQuantity });

  return book;
}

const updateBook = async (id, { title, author, pageQuantity }) => {
  const book = await Book.update(
    { title, author, pageQuantity },
    { where: { id } }
  );

  return book;
}

const removeBook = async (id) => await Book.destroy({ where: { id } });


module.exports = {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  removeBook
}