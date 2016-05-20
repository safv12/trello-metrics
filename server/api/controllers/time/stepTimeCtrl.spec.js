var StepTime = require('./index.js');
var should = require('should');

describe('Steps time controller tests', function() {
  'use strict';

  var lists = {
    open:[{ id: 'idList1' }],
    inprogress:[{ id: 'idList2' }],
    done:[{ id: 'idList3' }]
  };

  var card = {
    actions: [
      {
        "data": {
          "listAfter": { "id": "idList1" },
          "listBefore": { "id": "idList2" },
        },
        "type": "updateCard",
        "date": "2016-03-28T19:40:32.641Z"
      },
      {
        "data": {
          "listAfter": { "id": "idList2" },
          "listBefore": { "id": "idList4" },
        },
        "type": "updateCard",
        "date": "2016-03-22T16:15:33.443Z",
      },
      {
        "data": {
          "listAfter": { "id": "idList4" },
          "listBefore": { "id": "idList5" },
        },
        "type": "updateCard",
        "date": "2016-03-16T22:00:50.008Z",
      }
    ]
  };

  it('should get duration in lists and step time', function(done) {
    var stepTime = StepTime.getCardTime(card, lists);

    should(stepTime).have.property('listTime');
    should(stepTime).have.property('stepTime');
    should(stepTime.listTime.length).be.above(0);
    should(stepTime.stepTime.open).be.above(0);
    done();
  });
});
