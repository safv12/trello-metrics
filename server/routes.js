'use strict';

module.exports = function (app) {

  app.use('/v1/users', require('./api/controllers/users'));
  
};
