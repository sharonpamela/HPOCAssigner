'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(`./../config/config.js`);

const db = {};
let sequelize;


// config to connect to MySQL
sequelize = new Sequelize(`${config.DB_NAME}`, `${config.DB_USER_NAME}`, `${config.DB_PASSWORD}`, {
  "host": `${config.DB_HOST_ADDRESS}`,
  "dialect": `${config.DB_DIALECT}`
})

// import all of the model files
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
