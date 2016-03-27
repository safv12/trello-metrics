'use strict';

var utils = require('../utils');


function getTimeInList(actions) {
  actions.reverse();

  var i = 1;
  var listBefore = {};
  var listAfter = {};
  var duration = [];

  actions.forEach(function(action) {
    var currentList = {};
    var diff = 0;

    currentList = (action.type === 'updateCard') ?
      action.data.listAfter : action.data.list;

    listAfter = {
      date: action.date,
      list: currentList
    };

    if (listBefore.date) {
      diff = utils.getDateDiff(listBefore.date, listAfter.date);
      duration.push({ list: listBefore.list, duration: diff });
    }

    if (i === actions.length) {
      diff = utils.getDateDiff(listAfter.date, 'now');
      duration.push({ list: listAfter.list, duration: diff });
    }

    listBefore = listAfter;
    i++;
  });

  return duration;
}



function getTimeInStep(times, lists) {
  var stepTime = { open: 0, inprogress: 0, done: 0 };

  times.forEach(function(time) {
    var listFound = utils.searchList(time.list.id, lists);

    if (listFound) {
      stepTime[listFound] += time.duration;
    }
  });

  return stepTime;
}


exports.getCardTime = function(card, lists) {
  var listTime = getTimeInList(card.actions);
  var stepTime = getTimeInStep(listTime, lists);

  return {
    listTime: listTime,
    stepTime: stepTime
  };
};
