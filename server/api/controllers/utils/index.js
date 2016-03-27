'use strict';

exports.searchList = function(listId, listsObj) {
  var listFound = false;

  for(var list in listsObj) {
    var lists = listsObj[list];

    if (lists.length) {
      lists.forEach(function(item) {
        if (item.id === listId) {
          listFound = list;
        }
      });
    }
  }

  return listFound;
};



exports.getDateDiff = function(initialDate, compareDate) {
  var initial = new Date(initialDate);
  var compare = (compareDate === 'now') ? new Date() : new Date(compareDate);
  return (compare.getTime() - initial.getTime());
};


function convertTime(ms, format) {
  var x = ms / 1000;

  var formatsOperations = {
    seconds: function(time) {
      return { time: (x), format: 'seconds' };
    },
    minutes: function(time) {
      return { time: (x / 60), format: 'minutes' };
    },
    hours: function(time) {
      x = x / 60;
      return { time: (x / 60), format: 'hours' };
    },
    days: function(time) {
      x = (((x / 60) / 60) / 24);
      return { time: (x), format: 'days' };
    }
  };

  return formatsOperations[format](ms);
}


exports.getHumanReadableTime = function(ms) {
  var output = { time: ms, format: 'miliseconds' };
  var continueConvertion = true;

  while(continueConvertion) {
    var successor = {
      miliseconds: 'seconds',
      seconds: 'minutes',
      minutes: 'hours',
      hours: 'days'
    }

    var result = convertTime(ms, successor[output.format]);

    if (result.time < 1) {
      continueConvertion = false;
    } else {
      output = result;
    }

    if (output.format === 'days') {
      continueConvertion = false;
    }
  }

  return output;
};
