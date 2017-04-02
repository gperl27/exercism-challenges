var Squares = function(n){
  this.squareOfSums = this.squareOfSums(n);
  this.sumOfSquares = this.sumOfSquares(n);
  this.difference = this.squareOfSums - this.sumOfSquares;
}

Squares.prototype.squareOfSums = function(n){
  var sum = 0;

  for(var i = 0; i <= n; i++){
    sum += i;
  }

  return Math.pow(sum, 2);
}

Squares.prototype.sumOfSquares = function(n){
  var sum = 0;

  for(var i = 0; i <= n; i++){
    sum += Math.pow(i, 2);
  }

  return sum;
}

module.exports = Squares;
