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
    var listName = utils.searchList(card.idList, lists);

    if (listName === 'done') {
      card.time.listTime.forEach(function(step) {
        columns[step.list.name] += step.duration;
      });
    }

  });

  var cumulativeFlow = [];
  for (var column in columns) {
    var current = {};

    if (columns[column]) {
      current = {
        name: column,
        data: utils.getHumanReadableTime(columns[column])
      };

      cumulativeFlow.push(current);
    }
  }
  return cumulativeFlow;
};
