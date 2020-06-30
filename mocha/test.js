const should = require('should');
var assert = require('assert');

describe('#TEST', () => {
  it('test1', done => {
	 var test = ~~~~~~~(function (err, result) {
		 if (err) {
			 assert.fail('err');
		 } else {
			 "2".should.be.equal("2");
		 }
		 done();
	 });
  });
});
