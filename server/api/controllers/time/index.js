'use strict';

function getTimeInList(actions) {
  actions.reverse();
  var duration = [];
  var listBefore = {};
  var listAfter = {};

  actions.forEach(function(action) {
    // get date and listAfter
    listAfter = {
      date: action.date,
      list: action.data.listAfter
    };

    // if isset list before get date diff
    if (listBefore.date) {
      var initialDate = new Date(listBefore.date);
      var updateDate = new Date(listAfter.date);
      var diff = updateDate.getTime() - initialDate.getTime();
      duration.push({
        list: listBefore.list,
        duration: diff
      });
    }
    //if lastAction get time to now

    // update list before
    listBefore = {
      date: listAfter.date,
      list: listAfter.list
    };
  });

  return duration;
}





exports.getTimeInStep = function(card, lists) {
  var time = getTimeInList(card.actions);
  return time;
};
