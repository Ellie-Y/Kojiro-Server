// 同步所有模型
require('./Products');
require('./Users');
require('./Size');
require('./Taste');

const sequelize = require("./db");
sequelize
  .sync({
    alter: true,
  })
  .then(() => {
    console.log("All the models async suceeed");
  });
