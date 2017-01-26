var Binary = function(bits){
  this.bits = bits;
}

Binary.prototype.toDecimal = function(){
  var base = 2;
  var binaryArr = this.bits.split("").reverse();
  var length = binaryArr.length;

  for(var i = 0; i < length; i++){
    if(binaryArr[i] === '0' || binaryArr[i] === '1'){
      binaryArr[i] *= Math.pow(base, i);
    } else {
      return 0;
    }
  }
  
  return binaryArr.reduce(function(a,b){
    return a + b;
  }, 0);
}

module.exports = Binary;