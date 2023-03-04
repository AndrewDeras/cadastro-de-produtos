const Sequelize = require("sequelize");

const connection = new Sequelize(
  'ohbprodutos',
  'root',
  'Aa12345678@',
  {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
  });

module.exports = connection;