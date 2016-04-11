require('./server');

var request = require('supertest');
var conf = require('./config');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
request = request(conf.env.base + ':' + conf.env.port);

module.exports = request;
