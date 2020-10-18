const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const Products = require('./Products');

const Size = sequelize.define(
  "Size",
  {
    size1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

Size.belongsTo(Products);

module.exports = Size;
