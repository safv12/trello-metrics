'use strict';

function getTimeInList(actions) {
  actions.reverse();
  var duration = [];
  var listBefore = {};
  var listAfter = {};
  var i = 1;

  actions.forEach(function(action) {
    var diff = 0;
    listAfter = {
      date: action.date,
      list: action.data.listAfter
    };

    if (listBefore.date) {
      var initialDate = new Date(listBefore.date);
      var updateDate = new Date(listAfter.date);
      diff = updateDate.getTime() - initialDate.getTime();
      duration.push({
        list: listBefore.list,
        duration: diff
      });
    }

    //if lastAction get time to now
    if (i === actions.length) {
      var initial = new Date(listAfter.date);
      var now = new Date();
      diff = now.getTime() - initial.getTime();
      duration.push({
        list: listAfter.list,
        duration: diff
      });
    }

    // update list before
    listBefore = {
      date: listAfter.date,
      list: listAfter.list
    };
    i++;
  });

  return duration;
}





exports.getTimeInStep = function(card/*, lists*/) {
  var time = getTimeInList(card.actions);
  return time;
};
