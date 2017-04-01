var Series = function(str){
  this.digits = this.digitize(str);
}

Series.prototype.digitize = function(str){
  return str.split("").map(function(digit){
    return parseInt(digit);
  });
}

Series.prototype.slices = function(sliceSize){
  var digits = this.digits;

  // not enough digits to slice
  if(digits.length < sliceSize){
    throw 'Slice size is too big.';
  }

  var seriesArr = [];

  for(var i = 0; i < digits.length; i++){
    if(digits.slice(i, i + sliceSize).length === sliceSize){
      seriesArr.push(digits.slice(i, i + sliceSize));
    }
  }

  return seriesArr;
}

module.exports = Series;
