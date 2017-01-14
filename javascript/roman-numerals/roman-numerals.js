var ROMAN_DATA = {
        1000 : "M",  
         900 : "CM",  
         500 : "D",  
         400 : "CD",
         100 : "C",  
          90 : "XC",  
          50 : "L",  
          40 : "XL",  
          10 : "X",  
           9 : "IX",  
           5 : "V",  
           4 : "IV",  
           1 : "I",  
      }

var toRoman = function(num){
  var output = [];

  var reversedRomanNums = Object.keys(ROMAN_DATA).reverse();
  
  reversedRomanNums.forEach(function(value){
    output.push(ROMAN_DATA[parseInt(value, 10)].repeat(num/value));
    num = num % value;
  })

  return output.join("");
}

module.exports = toRoman;