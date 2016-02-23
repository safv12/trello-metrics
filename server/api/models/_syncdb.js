'use strict';
module.exports = function (app) {

  var User = require('./User.js');

  User.sync();
};
