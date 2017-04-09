'use strict';

require('mocha');
var assert = require('assert');
var ema = require('./');

describe('exponential-moving-average', function() {
  it('should export a function', function() {
    assert.equal(typeof ema, 'function');
  });

  it('should throw an error when array is not passed', function() {
    assert.throws(function() {
      ema();
    });
  });

  it('should throw an error when range is invalid', function() {
    assert.throws(function() {
      ema([1, 2, 3, 4, 5], 10);
    });
  });

  it('should calculate exponential moving average', function() {
    var fixture = ['22.27', '22.19', '22.08', '22.17', '22.18', '22.13', '22.23', '22.43', '22.24', '22.29', '22.15', '22.39', '22.38', '22.61', '23.36', '24.05', '23.75', '23.83', '23.95', '23.63', '23.82', '23.87', '23.65', '23.19', '23.10', '23.33', '22.68', '23.10', '22.40', '22.17'];

    assert.deepEqual(ema(fixture, 10), [
      '22.22',
      '22.21',
      '22.24',
      '22.27',
      '22.33',
      '22.52',
      '22.80',
      '22.97',
      '23.13',
      '23.28',
      '23.34',
      '23.43',
      '23.51',
      '23.53',
      '23.47',
      '23.40',
      '23.39',
      '23.26',
      '23.23',
      '23.08',
      '22.92'
    ]);
  });
});
