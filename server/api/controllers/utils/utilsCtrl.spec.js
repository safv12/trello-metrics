'use strict';

var should = require('should');
var utils = require('./utilsCtrl.js');

describe('utilsCtrl tests', function() {

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
  
});
