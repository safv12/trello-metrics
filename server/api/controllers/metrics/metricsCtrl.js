'use strict';

var Trello = require('node-trello');
var conf = require('../../../config');
var apiTrello = new Trello(conf.trello.key, conf.trello.token);


function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


exports.getCycleTime = function(req, res) {
  apiTrello.get('/1/members/me', function(err, data) {
    if (err) handleError(err, 500);
    res.status(200).send(data);
  });
};
