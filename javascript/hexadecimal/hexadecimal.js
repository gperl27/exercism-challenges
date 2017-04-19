var Hexadecimal = function(hex){
  this.hex = hex;
}

Hexadecimal.prototype.toDecimal = function(){
  var base = 16;
  var binaryArr = this.hex.split("").reverse();
  var length = binaryArr.length;
  var regex = /[a-f]/;

  for(var i = 0; i < length; i++){
    if(regex.test(binaryArr[i])){
      binaryArr[i] = letterToNumber(binaryArr[i]);
      binaryArr[i] *= Math.pow(base, i);
    } else if(parseInt(binaryArr[i]) >= 0 && parseInt(binaryArr[i]) <= 9){
      binaryArr[i] *= Math.pow(base, i);
    } else {
      return 0;
    }
  }

  return binaryArr.reduce(function(a,b){
    return a + b;
  }, 0);
}

function letterToNumber(l){
  switch(l){
    case 'a':
      return 10;
      break;
    case 'b':
      return 11;
      break;
    case 'c':
      return 12;
      break;
    case 'd':
      return 13;
      break;
    case 'e':
      return 14;
      break;
    case 'f':
      return 15;
      break;
  }
}

module.exports = Hexadecimal;
