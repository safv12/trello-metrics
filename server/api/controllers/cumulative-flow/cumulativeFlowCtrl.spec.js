var Chart = require('./cumulativeFlowCtrl.js');
var should = require('should');

describe('Chart metrics controller tests', function() {
  'use strict';

  var lists = {
    open:[{ id: 'idList1' }],
    inprogress: [{ id: 'idList2' }],
    done:[{ id: 'idList3' }]
  };

  var card = [{
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
  }];

  it('should get cumulative flow obj', function(done) {
    var cumulative = Chart.cumulativeFlow(card, lists);
    should(cumulative.length).be.above(0);
    should(cumulative[0]).have.property('name');
    should(cumulative[0]).have.property('data');
    should(cumulative[0]).have.property('time');
    done();
  });

});
