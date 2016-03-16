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


function getCards(columns, nextFunction) {
  var cards = { open: [], inprogress: [], done: [] };

  async.forEach(columns, function(column, mainCallback) {
    async.forEach(column.lists, function(list, callback) {
      apiTrello.get('/1/lists/' + list.id + '/cards/open', function(err, data) {
        if (err) handleError(err, 500);
        data.forEach(function(items) { cards[column.name].push(items); });
        callback();
      });
    }, function() {
      mainCallback();
    });
  }, function() {
    nextFunction(cards);
  });
}


function getCardsActions(lists, nextFunction) {
  var actions = { open: [], inprogress: [], done: [] };

  async.forEach(lists, function(list, mainCallback) {
    async.forEach(list.lists, function(card, callback) {
        apiTrello.get('/1/cards/' + card.id + '/actions', function(err, data) {
          if (err) handleError(err, 500);
          if (data.length) {
            data.forEach(function(items) { actions[list.name].push(items); });
          }
          callback();
        });
    }, function() {
      mainCallback();
    });
  }, function() {
    nextFunction(actions);
  });
}



exports.getCycleTime = function(req, res) {
  getCards({
    open: { name: 'open', lists: req.body.open },
    inprogress: { name: 'inprogress', lists: req.body.inprogress },
    done: { name: 'done', lists: req.body.done }
  }, function(cards) {
      res.status(200).send(cards);
  });
};
