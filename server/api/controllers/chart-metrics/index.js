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
  // TODO: Get Average
  cards.forEach(function(card) {
    var listName = utils.searchList(card.idList, lists);

    if (listName === 'done') {
      card.time.listTime.forEach(function(step) {
        var listStep = utils.searchList(step.list.id, lists);
        if (listStep !== 'done') {
          columns[step.list.name] += step.duration;
        }
      });
    }

  });

  var cumulativeFlow = [];
  for (var column in columns) {
    var current = {};
    var duration = utils.getHumanReadableTime(columns[column]);

    if (columns[column]) {
      current = {
        name: column,
        data: [duration.time],
        time: duration.format
      };

      cumulativeFlow.push(current);
    }
  }
  return cumulativeFlow;
};
