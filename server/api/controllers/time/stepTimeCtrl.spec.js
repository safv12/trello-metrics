var StepTime = require('./index.js');
var should = require('should');

describe('Steps time controller tests', function() {
  'use strict';

  var lists = {
    open:[{ id: '56575d75c4c8a7a865d5aa2f' }],
    inprogress:[{ id: '56575d9058c47a9f5692edbd' }],
    done:[{ id: '56cb4e7dfd1912ddc8ac64ff' }]
  };

  var card = {
    actions: [
      {
        "data": {
          "listAfter": { "id": "56575d75c4c8a7a865d5aa2f" },
          "listBefore": { "id": "56575d9058c47a9f5692edbd" },
        },
        "type": "updateCard",
        "date": "2016-03-28T19:40:32.641Z"
      },
      {
        "data": {
          "listAfter": { "id": "56575d9058c47a9f5692edbd" },
          "listBefore": { "id": "56967c4b0170d7b96a41467a" },
        },
        "type": "updateCard",
        "date": "2016-03-22T16:15:33.443Z",
      },
      {
        "data": {
          "listAfter": { "id": "56967c4b0170d7b96a41467a" },
          "listBefore": { "id": "56575d941a3bdf41003320ad" },
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
