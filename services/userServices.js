// 产品增删改
const User = require("../models/Users");
const md5 = require('md5');  // hash 单向加密
const validate = require('validate.js');
const moment = require('moment');
const { filter } = require('../utils/helpers');


async function addUser(userObj) {
  userObj = filter(userObj, 'username', 'password', 'email', 'birthday', 'phone', 'orders');
  console.log(userObj);

  const rule = {
    username: {
      presence: {
        allowEmpty: false
      },
      type: 'string'
    },
    password: {
      presence: {
        allowEmpty: false
      },
      type: 'string'
    },
    email: {
      presence: {
        allowEmpty: false
      },
      type: 'string'
    },
    birthday: {
      presence: false,
      datetime: {
        dateOnly: true,  // 只是日期，没有具体时间
        // * subtract(100, 2020) => 2020 - 100 = 1920
        earliest: +moment.utc().subtract(100, 'y'),  // 最早的时间为当前时间减少一百年
        latest: +moment.utc().subtract(0, 'y'),      // 最晚出生时间为现在
      }
    },
    phone: {
      presence: {
        allowEmpty: false
      },
      format: /1\d{10}/,
      // type: 'numericality',
    },
    orders: {
      presence: true
    }
  }

  const result = validate(userObj, rule);
  console.log(result);
  userObj.password = md5(userObj.password);
  const instance = await User.create(userObj);
  return instance.toJSON();
}


async function userLogin(username, password) {
  password = md5(password);
  const result = await User.findOne({
    where: {
      username,
      password,
    },
  });
  if (result && result.username === username) {
    return result.toJSON();
  }
  return null;
}


async function findById(id) {
  const result = await User.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
}


async function updateUser(UserId, changes) {
  const result = User.update(changes, {
    where: {
      id,
    },
  });

  return result;
}

module.exports = {
  userLogin,
  findById,
  addUser,
  updateUser,
};
