function nth(n){
  if(n === 0){
    throw new Error('Prime is not possible');
  }

  var start              = 1;
  var numOfPrimes        = 0;

  // we dont have an endpoint so we want to search indefinitely for primes
  while(1){
    if(isPrime(start)){
      numOfPrimes += 1;
      if(numOfPrimes === n){
        return start;
      }
    }

    start += 1;
  }
}

function isPrime(n){
  var start = 2;
  while (start <= Math.sqrt(n)) {
      if (n % start++ < 1) return false;
  }
  return n > 1;
}

module.exports = { nth }
