var NUMS = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
}

var TEENS = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
}

var TENS = {
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}

// associate a certain index with a place
// in anticipation of looping through chunks of hundreds
var PLACES = {
  1: 'thousand',
  2: 'million',
  3: 'billion'
}

module.exports = {
  inEnglish: function(n) {
    // handle < 0 && > 999,999,999,999
    if(n < 0 || n > 999999999999){
      throw new Error('Number must be between 0 and 999,999,999,999.');
    }

    var strNum = '';
    var chunks = this.chunkPlaces(n, 3);

    for(var i = 0; i < chunks.length; i++){
      // we need to clean up our numbers due to reversal and array manipulation during chunk process
      var c = this.hundredToEnglish(parseInt(chunks[i].reverse().join("")));

      if(i > 0){
        // account for zero
        if(c !== 'zero'){
          strNum = c + ' ' + PLACES[i] + ' ' + strNum;
        }
      } else {
        // account for zeroes not as a single digit
        if(!(chunks.length > 1 && c === 'zero')){
          strNum += c;
        }
      }
    }

    return strNum.trim();
  },

  hundredToEnglish: function(n){
    // between 0 & 9
    if(n >= 0 && n < 10){
      return NUMS[n];
    }

    // between 10 & 19
    if(n >= 10 && n < 20){
      return TEENS[n];
    }

    // between 20 && 99
    if(n >= 20 && n < 100){
      return this.combineTensAndOnes(n);
    }

    // else is > 100
    var splitNum = n.toString().split("");
    var hundreds = splitNum[0];
    var tens     = splitNum[1] + splitNum[2];

    return this.combineTensAndOnes(tens) ?
                NUMS[hundreds] + ' hundred ' + this.combineTensAndOnes(tens) :
                NUMS[hundreds] + ' hundred';
  },

  // handle tens and ones interpolation
  combineTensAndOnes: function(n){
    var splitNum = n.toString().split("");

    // see if there's a zero in the ones place
    if(splitNum[1] === '0'){
      return TENS[n];
    }

    var numToTens = splitNum[0] += '0';

    return TENS[numToTens] + '-' + NUMS[splitNum[1]];
  },

  // stackoverflow helper function for chunking arrays
  // src: https://stackoverflow.com/questions/11318680/split-array-into-chunks-of-n-length
  chunkPlaces: function (n, chunkSize) {
    // modified to split & reverse so we get right order for places ie [1] [000] for 1000
    var chunkArr = n.toString().split("").reverse();
    var R = [];
    for (var i=0,len=chunkArr.length; i<len; i+=chunkSize)
      R.push(chunkArr.slice(i,i+chunkSize));
    return R;
  }
}
