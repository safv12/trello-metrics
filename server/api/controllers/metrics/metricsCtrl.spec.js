// var request = require('../../../test-helper.js');
// var should = require('should');
//
// describe('Metrics controller tests', function() {
//   'use strict';
//
//   this.timeout(15000);
//
//   var lists = {
//     open:[{ id: 'idList1' }],
//     inprogress: [{ id: 'idList2' }],
//     done:[{ id: 'idList3' }]
//   };
//
//   it('should get board metrics', function(done) {
//     request.post('/v1/metrics/')
//       .send(lists)
//       .expect(200, function(err, res) {
//         if (err) { return done(err); }
//
//         should(res.body).have.property('cycleTime');
//         should(res.body).have.property('leadTime');
//         should(res.body).have.property('reactionTime');
//         should(res.body).have.property('cumulativeFlow');
//         done();
//       });
//   });
//
// });
