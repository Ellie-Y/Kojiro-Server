const sequelize = require("./db");
const { DataTypes } = require("sequelize");
// Key ID 让数据库定义
const Products = sequelize.define(
  'Products',
  {
    pid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    main_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub_img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.STRING,
    },
    taste: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sales: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // createdAt: false,
    // updatedAt: false,
    paranoid: true, // 表里面的数据不会被真正地删除，而是增加一列 deleteAt
  }
);

module.exports = Products; //导出模型（表）
