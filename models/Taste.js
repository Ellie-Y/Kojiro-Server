const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const Products = require('./Products');

const Taste = sequelize.define(
  "Taste",
  {
    taste1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    taste2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    taste3: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

Taste.belongsTo(Products);

module.exports = Taste;
