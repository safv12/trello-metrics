var request = require('../../../supertest.js');
var should = require('should');

describe('Metrics controller tests', function() {
  'use strict';

  this.timeout(15000);

  var lists = {
    open:[{ id: '56575d75c4c8a7a865d5aa2f' }],
    inprogress: [{ id: '56575d9058c47a9f5692edbd' }],
    done:[{ id: '56cb4e7dfd1912ddc8ac64ff' }]
  };

  it('should get board metrics', function(done) {
    request.post('/v1/metrics/')
      .send(lists)
      .expect(200, function(err, res) {
        if (err) { return done(err); }

        should(res.body).have.property('cycleTime');
        should(res.body).have.property('leadTime');
        should(res.body).have.property('reactionTime');
        should(res.body).have.property('cumulativeFlow');
        done();
      });
  });

});
