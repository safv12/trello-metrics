var request = require('../../../test-helper.js');
var should = require('should');

describe('Trello controller tests', function() {
  'use strict';
  this.timeout(15000);
  var boardId;
  var lists;


  it('should get all trello boards', function(done) {
    request.post('/v1/trello/me/boards')
    .expect(200, function(err, res) {
      if (err) { return done(err); }
      should(res.body.length).be.above(0);
      boardId = res.body[0].id;
      done();
    });
  });


  it('should get a board\'s lists', function(done) {
    request.get('/v1/trello/boards/' + boardId + '/lists')
    .expect(200, function(err, res) {
      if (err) { return done(err); }
      should(res.body.length).be.above(0);
      lists = res.body;
      done();
    });
  });
});
