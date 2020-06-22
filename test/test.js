'use strict';

require('chai').should();

var calcTax = require('../index.js');

describe('calcTax', function () {

  it('should return the correct amount', function () {
    calcTax(1).should.equal(0.2);
    calcTax(2).should.equal(0.4);
    calcTax(3).should.equal(0.6);
    calcTax(7).should.equal(1.4);
  });

  it('Should work with decimal inputs', function () {
    calcTax(0.2).should.equal(0.2);
    calcTax(0.4).should.equal(0.4);
    calcTax(0.6).should.equal(0.6);
    calcTax(1.4).should.equal(1.4);
  });

});
