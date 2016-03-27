'use strict';

var utils = require('../utils');

exports.getCycleTime = function(cards, lists) {
  var total = 0;
  var counter = 0;

  cards.forEach(function(card) {
    var list = utils.searchList(card.idList, lists);
    if (list !== 'open') {
      total += card.time.stepTime.inprogress;
      counter++;
    }
  });

  var cycleTime = total / counter;
  cycleTime = utils.getHumanReadableTime(cycleTime);
  return cycleTime;
};
