var BigInt = require('./big-integer');

var Grains = function() {}

Grains.prototype.square = function(n) {
  return BigInt(2).pow(n-1).toString();
}

//sum equals 2^n - 1
Grains.prototype.total = function() {
  return BigInt(2).pow(64).prev().toString();
}

module.exports = Grains;