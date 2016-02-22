// sequelize init file
'use strict';

var conf = require('../../config');
var Sequelize = require('sequelize');

var sequelize =  new Sequelize(conf.db.dbName, conf.db.username,
  conf.db.password, conf.db.options);

module.exports = sequelize;
