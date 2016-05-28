'use strict';

var utils = require('../utils/utilsCtrl.js');


/**
 * Create options to highcharts graphs
 * @param  {json}   lists of trello board
 * @return {json}   json with highcharts format options
 */
function createChartOptions(lists) {
  var bars = {};

  for(var list in lists) {
    lists[list].forEach(function(column) {
      bars[column.name] = {
        duration: 0,
        cards: 0
      };
    });
  }

  return bars;
}



exports.cumulativeFlow = function(cards, lists) {
  var charOptions = createChartOptions(lists);

  cards.forEach(function(card) {
    var listName = utils.searchList(card.idList, lists);

    if (listName === 'done') {
      card.time.listTime.forEach(function(step) {
        var listStep = utils.searchList(step.list.id, lists);
        if (listStep !== 'done' && charOptions[step.list.name]) {
          charOptions[step.list.name].duration += step.duration;
          charOptions[step.list.name].cards ++;
        }
      });
    }
  });

  var cumulativeFlow = [];
  for (var bar in charOptions) {
    var current = {};
    var average = charOptions[bar].duration / charOptions[bar].cards;
    var duration = utils.getHumanReadableTime(average);

    if (charOptions[bar]) {
      current = {
        name: bar,
        data: [ duration.time ],
        time: duration.format
      };

      cumulativeFlow.push(current);
    }
  }
  return cumulativeFlow;
};
