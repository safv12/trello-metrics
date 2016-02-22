'use strict';

require('../../../server');

var should = require('should');
var request = require('supertest');

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
request = request('http://localhost:9001');



describe('/api/v1/users', function () {
  var userId;

  it('should save a new user', function (done) {
    request.post('/api/v1/users')
    .send({firstName: 'super', lastName: 'test'})
    .expect(201, function (err, res) {
      if (err){ return done(err); }
      userId = res.body._id;
      should(res.body).have.property('_id');
      done();
    });
  });


  it('should get list of users', function (done) {
    request.get('/api/v1/users')
    .expect(200, function (err, res) {
      if (err){ return done(err); }
      should(res.body).be.ok();
      done();
    });
  });


  it('should get a specific user', function (done) {
    request.get('/api/v1/users/' + userId)
    .expect(200, function (err, res) {
      if (err){ return done(err); }
      should(res.body).have.property('_id');
      done();
    });
  });


  it('should update a specific user', function (done) {
    request.put('/api/v1/users/' + userId)
    .send({firstName: 'supertest', lastName: 'updated'})
    .expect(200, function (err) {
      if (err){ return done(err); }
      done();
    });
  });


  it('should update a specific user', function (done) {
    request.delete('/api/v1/users/' + userId)
    .expect(204, function (err) {
      if (err){ return done(err); }
      done();
    });
  });
});


//
// describe('GET /users', function () {
// });
