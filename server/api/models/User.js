'use strict';

var Sequelize = require('sequelize');
var sequelize = require('./_connection.js');

var User = sequelize.define('user', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  },
  email: { type: Sequelize.STRING,  unique: true },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    field: 'is_admin'
  }
}, { freezeTableName: true });

module.exports = User;
