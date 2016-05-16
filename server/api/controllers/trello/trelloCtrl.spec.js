var request = require('../../../supertest.js');
var should = require('should');

describe('Trello controller tests', function() {
  'use strict';
  this.timeout(15000);

  it('should get all trello boards', function(done) {
    request.post('/v1/trello/me/boards')
    .expect(200, function(err, res) {
      if (err) { return done(err); }
      should(res.body.length).be.above(0);
      done();
    });
  });

});
