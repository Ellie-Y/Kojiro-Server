// 同步所有模型
require('./Products');
require('./Users');

const sequelize = require("./db");
sequelize
  .sync({
    alter: true,
  })
  .then(() => {
    console.log("All the models async suceeed");
  });
