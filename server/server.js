'use strict';

var bodyParser = require('body-parser');
var morgan = require('morgan');
var conf = require('./config');
var express = require('express');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,' +
    'Content-Type, Authorization');
  next();
});


require('./routes')(app);


app.listen(conf.env.port, function () {
  console.log('Server listen at ' + conf.env.base + ':' + conf.env.port);
});
