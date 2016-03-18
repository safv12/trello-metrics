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


function getCards(lists, nextFunction) {
  var cards = [];

  async.forEach(lists, function(list, callback) {
    apiTrello.get('/1/lists/' + list.id + '/cards/open', function(err, data) {
      if (err) handleError(err);
      cards.push(data);
      callback();
    });
  }, function() {

    nextFunction(cards);
  });
}


function apiCall(id, callback) {
  apiTrello.get('/1/cards/' + id + '/actions', function(err, data) {
      if (err) {
        if (err.statusCode === 429) {
          console.log('entra...');
          setTimeout(function() {
            console.log('espera...');
            apiCall(id, callback);
          }, 1000 * 20);
        } else {
          return handleError(err, err.statusCode);
        }
      } else {
        if (data.length) {
          callback(data);
        }
      }
    });
}


function getCardsActions(cards, nextFunction) {
  console.log(cards.length);
  var actions = [];
  async.forEach(cards, function(card, callback) {
    apiCall(card.id, function(response) {
      console.log('apiCall');
      actions.push(response);
      callback();
    });
  }, function() {
    console.log('nextFunction');
    nextFunction(actions);
  });
}


exports.getCycleTime = function(req, res) {
  var lists = [];

  req.body.open.forEach(function(items) {
      lists.push(items);
  });

  req.body.inprogress.forEach(function(items) {
      lists.push(items);
  });

  req.body.done.forEach(function(items) {
      lists.push(items);
  });

  getCards(lists, function(items) {
    var cards = [];

    items.forEach(function(item) {
      item.forEach(function(card) {
        cards.push(card);
      });
    });

    getCardsActions(cards, function(actions) {
      res.status(200).send(actions);
    });
  });
};
