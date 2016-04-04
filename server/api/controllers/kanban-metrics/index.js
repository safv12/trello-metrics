'use strict';

var utils = require('../utils');


var MetricObj = function(cards) {
  this.total = 0;
  this.counter = 0;
  this.cards = cards;

  this.loop = function(callback) {
    cards.forEach(function(card) {
      callback(card);
    });
  };

  this.getAverage = function() {
    var average = utils.getHumanReadableTime(this.total / this.counter);
    return average;
  };
};



exports.getCycleTime = function(cards, lists) {
  var Metric = new MetricObj(cards);

  Metric.loop(function(card) {
    var list = utils.searchList(card.idList, lists);
    if (list === 'done') {
      Metric.total += card.time.stepTime.inprogress;
      Metric.counter++;
    }
  });

  return Metric.getAverage();
};



exports.getLeadTime = function(cards, lists) {
  var Metric = new MetricObj(cards);

  Metric.loop(function(card) {
    var list = utils.searchList(card.idList, lists);
    if (list === 'done') {
      Metric.total += card.time.stepTime.open;
      Metric.total += card.time.stepTime.inprogress;
      Metric.counter++;
    }
  });

  return Metric.getAverage();
};



exports.getReactionTime = function(cards, lists) {
  var Metric = new MetricObj(cards);

  Metric.loop(function(card) {
    var list = utils.searchList(card.idList, lists);
    if (list === 'done') {
      Metric.total += card.time.stepTime.open;
      Metric.counter++;
    }
  });

  return Metric.getAverage();
};
