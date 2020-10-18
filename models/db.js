const { Sequelize } = require('sequelize');
const { sqlLogger } = require('../logs/config');

const sequelize = new Sequelize('dessert-app', 'root', '113716', {
  host: 'localhost',
  dialect: 'mysql',
  logging: ( msg ) => {
    sqlLogger.debug(msg);
  }
});

module.exports = sequelize;

 
