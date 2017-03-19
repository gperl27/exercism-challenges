var Trinary  = function(bits){
  this.bits = bits;
}

Trinary.prototype.toDecimal = function(){
  var base = 3;
  var binaryArr = this.bits.split("").reverse();
  var length = binaryArr.length;

  for(var i = 0; i < length; i++){
    if(parseInt(binaryArr[i]) >= 0 && parseInt(binaryArr[i]) <= 3){
      binaryArr[i] *= Math.pow(base, i);
    } else {
      return 0;
    }
  }

  return binaryArr.reduce(function(a,b){
    return a + b;
  }, 0);
}

module.exports = Trinary;
