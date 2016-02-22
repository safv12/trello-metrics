'use strict';

module.exports = function (app) {

  // insert routes bellow
  app.use('/api/v1/users', require('./api/controllers/users'));

};
