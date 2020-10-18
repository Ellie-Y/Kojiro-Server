const sequelize = require("./db");
const { DataTypes } = require("sequelize");
const moment = require('moment');

const Users = sequelize.define(
  "Users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,  // 初始化的 DATE 格式得是 yyyy-mm-dd 这样的格式
      allowNull: false,
      get() {  // Object define property
        return this.getDataValue('birthday').getTime();   //* 转换成时间戳
      }
    },
    age: {
      type: DataTypes.VIRTUAL,    //* 虚拟字段
      get() {
        const now = moment.utc();
        const birthTime = moment.utc(this.birthday);
        return now.diff(birthTime, 'y');    // 得到两个年份的差异
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orders: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    updatedAt: false,
  }
);

module.exports = Users;
