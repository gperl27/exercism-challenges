var Palindromes = function(obj) {
  this.max = obj.maxFactor;
  this.min = obj.minFactor || 1;
  this.factors = {};
  this.factorsProducts = [];
}

Palindromes.prototype.generate = function () {
  var max = this.max;
  var min = this.min;

  for (var i = min; i <= max; i++){
    for(var j = max; j >= min; j--){
      var product = i * j;
      if(isPalindrome(product)){
        if(!this.factors[product]){
          this.factors[product] = [];
        }
        if(searchForArray(this.factors[product], [i,j].sort())){
          this.factors[product].push([i,j].sort());
          this.factorsProducts.push(product);
        }
      }
    }
  }
};

Palindromes.prototype.largest = function () {
  var max = Math.max.apply(null, this.factorsProducts);
  return { value: max, factors: this.factors[max]}
};

Palindromes.prototype.smallest = function () {
  var min = Math.min.apply(null, this.factorsProducts);
  return { value: min, factors: this.factors[min]}
};


function isPalindrome(n){
  var strNum = n.toString();
  return strNum === strNum.split('').reverse().join('');
}

// stackoverflow helper function to see if array exists in array
// src: https://stackoverflow.com/questions/19543514/check-whether-an-array-exists-in-an-array-of-arrays
function searchForArray(haystack, needle){
  var i, j, current;
  for(i = 0; i < haystack.length; ++i){
    if(needle.length === haystack[i].length){
      current = haystack[i];
      for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
      if(j === needle.length)
        return i;
    }
  }
  return -1;
}

module.exports = Palindromes;
