'use strict';

module.exports = function (app) {
  app.use('/v1/users', require('./api/controllers/users'));
  app.use('/v1/metrics', require('./api/controllers/metrics'));
};
