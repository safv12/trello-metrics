'use strict';

var utils = require('../utils');


function createColumnsObj(lists) {
  var columns = {};

  for(var list in lists) {
    lists[list].forEach(function(column) {
      columns[column.name] = 0;
    });
  }

  return columns;
}


exports.cumulativeFlow = function(cards, lists) {
  var columns = createColumnsObj(lists);

  cards.forEach(function(card) {
    card.time.listTime.forEach(function(step) {
      var isInList = utils.searchList(step.list.id, lists);
      if (isInList && step.duration) {
        columns[step.list.name] += step.duration;
      }
    });
  });

  return columns;
};
