const sequelize = require("./db");
const { DataTypes } = require("sequelize");
// Key ID 让数据库定义
const Orders = sequelize.define(
  "Orders",
  {
    orderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    products: {  //* 应该是一个数组，里面包含了产品，数量等信息
      type: DataTypes.STRING,
      allowNull: false,
    },
    buyer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true  
  }
);

module.exports = Orders;
