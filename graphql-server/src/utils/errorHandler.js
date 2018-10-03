const { ApolloError } = require('apollo-server');

const errorNotFound = (message = 'Item not found') => new ApolloError(message, 404);

module.exports = {
  errorNotFound,
};
