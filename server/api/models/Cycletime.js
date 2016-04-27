var Sequelize = require('sequelize');
var sequelize = require('./_connection.js');

var Cycletime = sequelize.define('cycletime', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  time: Sequelize.FLOAT,
  format: Sequelize.STRING,
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});

module.exports = Cycletime;
