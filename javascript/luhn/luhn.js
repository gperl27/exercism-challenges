var Luhn = function(num){
  this.valid = false;

  this.validate(num);
}

Luhn.prototype.validate = function(num){
  // single zero is invalid
  if(num === '0' || num === 0){
    return;
  }

  // get rid of spaces and reverse per algorithm rules
  var cleanArr = num.replace(/\s/g, "").split("").reverse();

  // *= 9 every second digit
  // -= 9 if > 9
  for(var i = 1; i < cleanArr.length; i += 2){
    console.log(cleanArr[i]);
    cleanArr[i] *= 2;
    if(cleanArr[i] > 9){
      cleanArr[i] -= 9;
    }
  }

  // sum digits to take mod 10
  luhnSum = cleanArr.reduce(function(a,b){
      return parseInt(a) + parseInt(b);
    }, 0);

  luhnSum % 10 === 0 ? this.valid = true : null;
}

module.exports = Luhn;
