'use strict';

module.exports = function() {
  var User = require('./User.js');
  var Cycletime = require('./Cycletime.js');

  User.sync();
  Cycletime.sync();
};
