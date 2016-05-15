'use strict';

var should = require('should');
var utils = require('./utilsCtrl.js');

describe('utils module tests', function() {


  it('should find list with some id', function(done) {
    var lists = {
      listContainer1: [ {id: 'idlist1'}, {id: 'idlist2'}, {id: 'idlist3'} ],
      listContainer2: [ {id: 'idlist4'}, {id: 'idlist5'}, {id: 'idlist6'} ],
      listContainer3: [ {id: 'idlist7'}, {id: 'idlist8'}, {id: 'idlist9'} ]
    };

    var successSearch = utils.searchList('idlist8', lists);
    var falseSearch = utils.searchList('idlist10', lists);

    should(successSearch).be.ok();
    should(falseSearch).not.be.ok();

    done();
  });


  it('should get diff of dates', function(done) {
    var dateDiff = utils.getDateDiff('2016-01-08', '2016-01-10');
    should(dateDiff).be.eql(172800000);
    done();
  });


  it('should convert unix date to human readable date', function(done) {
    var unixDate = 172800000;

    var humanReadable = utils.getHumanReadableTime(unixDate);

    should(humanReadable).have.property('time');
    should(humanReadable).have.property('format');
    should(humanReadable.time).be.eql(2);
    should(humanReadable.format).be.eql('days');

    done();
  });
});
