'use strict';

module.exports = function(app) {

  // Controllers routes
  app.use('/v1/users', require('./api/controllers/users'));
  app.use('/v1/metrics', require('./api/controllers/metrics'));
  app.use('/v1/trello', require('./api/controllers/trello'));

};
