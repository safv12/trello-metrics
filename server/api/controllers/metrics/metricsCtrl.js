'use strict';

var Trello = require('node-trello');
var conf = require('../../../config');
var apiTrello = new Trello(conf.trello.key, conf.trello.token);
var async = require('async');
var Time = require('../time');
var Kanban = require('../kanban-metrics');
var Chart = require('../cumulative-flow/cumulativeFlowCtrl.js');


function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}



function apiCall(endpoint, callback) {
  apiTrello.get(endpoint, function(err, data) {
    if (err) {
      if (err.statusCode === 429) {
        setTimeout(function() {
          apiCall(endpoint, callback);
        }, 1000 * 10);
      } else {
        return handleError(err, err.statusCode);
      }
    } else {
      callback(data);
    }
  });
}



function getCards(lists, nextFunction) {
  var cards = [];

  async.forEach(lists, function(list, callback) {
    apiCall('/1/lists/' + list.id + '/cards/open', function(data) {
      cards.push(data);
      callback();
    });
  }, function() {
    nextFunction(cards);
  });
}




function getCardsActions(cards, lists, onCompletion) {
  var cardsActions = [];
  var count  = 0;

  if (cards.length) {
    async.forEach(cards, function(card, callback) {
      count += 1;
      var endpoint = '/1/cards/' + card.id +
      '/actions?filter=createCard,updateCard:idList';

      apiCall(endpoint, function(response) {
        count -= 1;
        card.actions = response;
        var duration = Time.getCardTime(card, lists);
        card.time = duration;
        cardsActions.push(card);
        if (!count) { onCompletion(cardsActions); }
      });

      callback();
    });
  } else {
    onCompletion([]);
  }
}



function getItems(items) {
  var output = [];

  items.forEach(function(item) {
    item.forEach(function(element) {
      output.push(element);
    });
  });

  return output;
}



exports.getMetrics = function(req, res) {
  var lists = getItems([
    req.body.open,
    req.body.inprogress,
    req.body.done
  ]);

  getCards(lists, function(items) {
    var cards = getItems(items);
    getCardsActions(cards, req.body, function(actions) {
      var cumulativeFlow = Chart.cumulativeFlow(actions, req.body);

      res.status(200).send({
        cycleTime: Kanban.getCycleTime(actions, req.body),
        leadTime: Kanban.getLeadTime(actions, req.body),
        reactionTime: Kanban.getReactionTime(actions, req.body),
        cumulativeFlow: cumulativeFlow
      });
    });
  });
};
