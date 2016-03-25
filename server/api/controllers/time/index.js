'use strict';

function getTimeInList(actions) {
  actions.reverse();
  var duration = [];
  var listBefore = {};
  var listAfter = {};
  var i = 1;

  actions.forEach(function(action) {
    var diff = 0;

    if (i !== 1) {
      listAfter = {
        date: action.date,
        list: action.data.listAfter
      };
    } else {
      listAfter = {
        date: action.date,
        list: action.data.list
      };
    }


    if (listBefore.date) {
      var initialDate = new Date(listBefore.date);
      var updateDate = new Date(listAfter.date);
      diff = updateDate.getTime() - initialDate.getTime();
      duration.push({
        list: listBefore.list,
        duration: diff
      });
    }

    if (i === actions.length) {
      var initial = new Date(listAfter.date);
      var now = new Date();
      diff = now.getTime() - initial.getTime();
      duration.push({
        list: listAfter.list,
        duration: diff
      });
    }

    listBefore = {
      date: listAfter.date,
      list: listAfter.list
    };
    i++;
  });

  return duration;
}


function getTimeInStep(time, lists) {
  return 'pending...';
}




exports.getCardTime = function(card, lists) {
  var listTime = getTimeInList(card.actions);
  var stepTime = getTimeInStep(listTime, lists);
  return {
    listTime: listTime,
    stepTime: stepTime
  };
};
