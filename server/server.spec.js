'use strict';

require('./server.js');

var request = require('supertest');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
request = request('http://localhost:9001');

describe('/', function() {
  it('should serve a static files', function(done) {
    request.get('/').expect(200, function(err) {
      if(err) return done(err);
      done();
    });
  });
});
