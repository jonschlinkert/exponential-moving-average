'use strict';

var extend = require('extend-shallow');

module.exports = function(arr, options) {
  if (!Array.isArray(arr)) {
    throw new TypeError('expected an array');
  }

  if (typeof options === 'number') {
    options = { range: options };
  }

  var defaults = {range: arr.length / 2, format: toFixed};
  var opts = extend({}, defaults, options);
  var range = opts.range;

  if (arr.length < range) {
    throw new RangeError('expected range to be greater than array length');
  }

  var c = smooth(range);
  var num = avg(arr.slice(0, range), opts);
  var acc = [opts.format(num)];
  for (var i = range; i < arr.length; i++) {
    num = (c * Number(arr[i])) + ((1 - c) * num);
    acc.push(opts.format(num));
  }
  return acc;
};

function avg(arr, options) {
  var len = arr.length, i = -1;
  var num = 0;
  while (++i < len) num += Number(arr[i]);
  return num / len;
}

function smooth(n) {
  return 2 / (n + 1);
}

function toFixed(n) {
  return n.toFixed(2);
}
