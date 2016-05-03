'use strict';

var utils = require('../utils/utilsCtrl.js');


function createColumnsObj(lists) {
  var columns = {};

  for(var list in lists) {
    lists[list].forEach(function(column) {
      columns[column.name] = { duration: 0, cards: 0 };
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
        var listStep = utils.searchList(step.list.id, lists);
        if (listStep !== 'done' && columns[step.list.name]) {
          columns[step.list.name].duration += step.duration;
          columns[step.list.name].cards ++;
        }
      });
    }
  });

  var cumulativeFlow = [];
  for (var column in columns) {
    var current = {};
    var average = columns[column].duration / columns[column].cards;
    var duration = utils.getHumanReadableTime(average);

    if (columns[column]) {
      current = {
        name: column,
        data: [ duration.time ],
        time: duration.format
      };

      cumulativeFlow.push(current);
    }
  }
  return cumulativeFlow;
};
