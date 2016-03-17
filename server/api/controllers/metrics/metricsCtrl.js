'use strict';

var Trello = require('node-trello');
var conf = require('../../../config');
var apiTrello = new Trello(conf.trello.key, conf.trello.token);
var async = require('async');


function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}


function getCards(board, callback) {
  apiTrello.get('/1/boards/' + board + '/cards/open', function(err, data) {
    if (err) handleError(err);
    callback(data);
  });
}


exports.getCycleTime = function(req, res) {
  getCards(req.body.board, function(cards) {
    res.status(200).send(cards);
  });
};
