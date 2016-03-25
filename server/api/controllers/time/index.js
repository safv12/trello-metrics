'use strict';

function getTimeInList(actions) {
  actions.reverse();

  var duration = [];
  var listBefore = {};
  var listAfter = {};
  var i = 1;

  actions.forEach(function(action) {
    var diff = 0;

    if (action.type === 'updateCard') {
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
    if (duration.list === undefined) {
      console.log(action);
    }
  });


  return duration;
}


function searchList(listId, listsObj) {
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
}


function getTimeInStep(times, lists) {
  var stepTime = {
    open: 0,
    inprogress: 0,
    done: 0
  };

  times.forEach(function(time) {
    var listFound = searchList(time.list.id, lists);
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
