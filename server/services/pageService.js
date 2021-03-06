/* eslint-disable camelcase */
const { Page } = require('../models');

const createPage = ({ content, book_id }) => {
  return new Page({ content, book_id }).save(null, {
    require: true,
    method: 'insert',
  });
};

const deletePage = (book_id, id) => {
  return new Page({ id, book_id }).destroy({ require: true });
};

const getAllPagesFromBook = (book_id) => {
  return Page.where({ book_id }).fetchAll({
    require: true,
  });
};

const getPageById = (book_id, id) => {
  return Page.where({ id, book_id }).fetch({
    require: true,
  });
};

const patchPage = (book_id, id, { content }) => {
  return new Page({ id, book_id }).save(
    { content },
    {
      require: true,
      method: 'update',
      patch: true,
    }
  );
};
module.exports = {
  createPage,
  deletePage,
  getAllPagesFromBook,
  getPageById,
  patchPage,
};
