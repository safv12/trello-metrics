var Chart = require('./index.js');
var should = require('should');

describe('Chart metrics controller tests', function() {
  'use strict';

  var lists = {
    open:[{ id: '56575d75c4c8a7a865d5aa2f' }],
    inprogress: [{ id: '56575d9058c47a9f5692edbd' }],
    done:[{ id: '56cb4e7dfd1912ddc8ac64ff' }]
  };

  var card = [{
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
