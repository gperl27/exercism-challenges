var Sieve = function(num){
  this.primes = this.getPrimes(num);
}

Sieve.prototype.getPrimes = function(num){
  var start = 2;
  var primes = [];
  var numList = [];

  // fill list with numbers to remove from
  for(var i = start; i <= num; i++){
    numList.push(i);
  }

  // push the first index of numList, then filter out multiples
  // set start equal to the newly filtered list
  // do this until we hit our max number
  while(start <= num){
    primes.push(start);
    for(var i = start; i <= num; i++){
      numList = numList.filter(function(n){
        return n % start !== 0;
      });
    }
    start = numList[0];
  }

  return primes;
}



module.exports = Sieve;
