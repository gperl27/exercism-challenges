//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var last = input[input.length-1];

  if(isSilent(input)){
    return "Fine. Be that way!";
  } else if (checkUpperCase(input) && checkNumbers(input)) {
    return "Whoa, chill out!";
  } else if (isQuestion(input)) {
    return "Sure.";
  } else {
    return "Whatever.";
  }
};

function isSilent(input){
  return /^\s*$/.test(input);
}

function isQuestion(input) {
  return /\?\s*$/.test(input);
}

//these two functions refer to yelling

function checkUpperCase(input){
  return input.toUpperCase() === input;
}

function checkNumbers(input){
  return /[A-Z]/.test(input);
}


module.exports = Bob;
