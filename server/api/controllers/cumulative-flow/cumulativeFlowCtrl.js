'use strict';

var utils = require('../utils/utilsCtrl.js');


/**
 * Create options to highcharts graphs
 * @param  {json}   lists of trello board
 * @return {json}   json with highcharts format options
 */
function getChartOptions(lists) {
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


/**
 * Get the cards time accumulated by step or column in trello
 * @param  {json} cards   All not ignored board cards
 * @param  {json} lists   Not ignored lists in board
 * @param  {json} steps   Steps prepared for the chart
 * @return {json}         Steps to be readed by the chart
 */
function getAccumulatedTime(cards, lists, steps) {
  cards.forEach(function(card) {
    var listName = utils.searchList(card.idList, lists);

    if (listName === 'done') {

      card.time.listTime.forEach(function(step) {
        var listStep = utils.searchList(step.list.id, lists);

        if (listStep !== 'done' && steps[step.list.name]) {
          steps[step.list.name].duration += step.duration;
          steps[step.list.name].cards ++;
        }

      });
    }
  });

  return steps;
}



exports.cumulativeFlow = function(cards, lists) {
  var charOptions = getChartOptions(lists);
  var accumulatedTime = getAccumulatedTime(cards, lists, charOptions);

  var cumulativeFlow = [];
  for (var step in accumulatedTime) {
    var current = {};
    var average = accumulatedTime[step].duration / accumulatedTime[step].cards;
    var duration = utils.getHumanReadableTime(average);

    if (accumulatedTime[step]) {
      current = {
        name: step,
        data: [ duration.time ],
        time: duration.format
      };

      cumulativeFlow.push(current);
    }
  }
  return cumulativeFlow;
};
