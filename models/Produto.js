const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/database");

class Produto extends Model { };

Produto.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
}, {
  sequelize, modelName: 'produtos'
});

module.exports = Produto;