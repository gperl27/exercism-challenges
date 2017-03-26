var Octal  = function(bits){
  this.bits = bits;
}

Octal.prototype.toDecimal = function(){
  var base = 8;
  var binaryArr = this.bits.split("").reverse();
  var length = binaryArr.length;

  for(var i = 0; i < length; i++){
    if(parseInt(binaryArr[i]) >= 0 && parseInt(binaryArr[i]) < base){
      binaryArr[i] *= Math.pow(base, i);
    } else {
      return 0;
    }
  }

  return binaryArr.reduce(function(a,b){
    return a + b;
  }, 0);
}

module.exports = Octal;
