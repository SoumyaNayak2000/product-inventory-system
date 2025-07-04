const Sequelize = require('sequelize');
const sequelize = require('./config/db');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Product = require('../src/modules/product/product.model')(sequelize, Sequelize.DataTypes);
db.Category = require('../src/modules/category/category.model')(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((key) => {
  if (db[key].associate) db[key].associate(db);
});

module.exports = db;
