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


exports.getBoards = function(req, res) {
  console.log('peticion');
  apiTrello.get('/1/members/me/boards', function(err, data) {
    console.log(data);
    if (err) { return handleError(err, err.statusCode); }
    res.status(200).send(data);
  });
};


exports.getLists = function(req, res) {
  apiTrello.get('/1/boards/'+req.params.board+'/lists', function(err, data) {
    if (err) { return handleError(err, err.statusCode); }
    res.status(200).send(data);
  });
};
