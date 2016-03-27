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
