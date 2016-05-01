var request = require('./supertest.js');

describe('/', function() {
  'use strict';

  it('should serve a static files', function(done) {
    request.get('/').expect(200, function(err) {
      if(err) {
        return done(err);
      }

      done();
    });
  });
});
