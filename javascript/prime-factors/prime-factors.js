var primeFactors = function(n){
  if(n === 1){
    return [];
  }
  
  var base = 2;
  var factors = [];

  while(n/base >= 1) {
    if(n%base === 0){
      n /= base;
      factors.push(base);
    } else {
      base++;
    }
  }

  return factors;
}

module.exports = { for: primeFactors };

