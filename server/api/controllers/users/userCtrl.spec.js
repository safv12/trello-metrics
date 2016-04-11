'use strict';

var request = require('../../../supertest.js');
var should = require('should');

describe('/v1/users', function() {
  var userId;

  it('should save a new user', function(done) {
    request.post('/v1/users')
    .send({firstName: 'super', lastName: 'test'})
    .expect(201, function (err, res) {
      if (err){ return done(err); }
      userId = res.body._id;
      should(res.body).have.property('_id');
      done();
    });
  });


  it('should get list of users', function(done) {
    request.get('/v1/users')
    .expect(200, function (err, res) {
      if (err){ return done(err); }
      should(res.body).be.ok();
      done();
    });
  });


  it('should get a specific user', function(done) {
    request.get('/v1/users/' + userId)
    .expect(200, function (err, res) {
      if (err){ return done(err); }
      should(res.body).have.property('_id');
      done();
    });
  });


  it('should update a specific user', function(done) {
    request.put('/v1/users/' + userId)
    .send({firstName: 'supertest', lastName: 'updated'})
    .expect(200, function (err) {
      if (err){ return done(err); }
      done();
    });
  });


  it('should update a specific user', function(done) {
    request.delete('/v1/users/' + userId)
    .expect(204, function (err) {
      if (err){ return done(err); }
      done();
    });
  });
});
