var Series = function(num){
  this.num = num;
}

Series.prototype.largestProduct = function(seriesLen){
  var num = this.num;

  inputValidations(num, seriesLen);

  // make sure input is not empty
  // spec asks to return 1
  // for some reason this wouldnt return 1 in inputValidations()
  if(num === '' && seriesLen === 0){
    return 1;
  }

  var series = num.split("");
  var maxProduct = 0;


  for(var i = 0; i < series.length; i++){
    // from the current spot of i
    // we want to check the current series
    // then compare it to the current max product
    var tempProduct = 1;

    for(var j = 0; j < seriesLen; j++){
      if(series[i + j]){
        tempProduct *= parseInt(series[i + j]);
      } else {
        tempProduct = maxProduct;
      }
    }

    maxProduct = (maxProduct > tempProduct) ? maxProduct : tempProduct;
  }

  return maxProduct;
}

function inputValidations(num, seriesSlice){
  // empty string input
  // and non zero slice length
  // throw erro
  if(num === '' && seriesSlice > 0){
    error('Slice size is too big.');
  }

  // if input is zero(es)
  // return 0
  if(parseInt(num) === 0){
    return 0;
  }

  // make sure input is only integers
  if(num.match(/[a-zA-Z]/g)){
    error('Invalid input.');
  }


  // make sure seriesSlice is not negative
  if(seriesSlice < 0){
    error('Invalid input.');
  }

  // zero slice length
  // spec asks to return 1
  if(seriesSlice === 0){
    return 1;
  }

  // if series slice is bigger than input length
  if(seriesSlice > num.length){
    error('Slice size is too big.');
  }
}

function error(str){
  throw new Error(str);
}

module.exports = Series;
