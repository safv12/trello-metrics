'use strict';

var request = require('../../../test-helper.js');
var should = require('should');


describe('CycleTime controller tests', function() {
  var cycletimes;

  it('should get cycletimes', function(done) {
    request.get('/v1/metrics/cycletime')
      .expect(200, function(err, res) {
        if (err) { return done(err); }
        should(res.body.length).be.above(0);
        cycletimes = res.body;
        done();
      });
  });

  it('cycletimes has properties', function(done) {
    should(cycletimes[0]).have.property('time');
    should(cycletimes[0]).have.property('format');
    should(cycletimes[0]).have.property('date');
    done();
  });

});
