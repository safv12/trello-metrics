'use strict';

var utils = require('../utils');

exports.getLeadTime = function(cards, lists) {
  var total = 0;
  var counter = 0;

  cards.forEach(function(card) {
    var list = utils.searchList(card.idList, lists);
    if (list === 'open') {
      console.log(list);
      total += card.time.stepTime[list];
      counter++;
    }
  });

  var leadTime = utils.getHumanReadableTime(total / counter);
  return leadTime;
};
