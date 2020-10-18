const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const Products = require("./Products");

const ProductSales = sequelize.define('ProductSales', {
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sales: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


module.exports = ProductSales;