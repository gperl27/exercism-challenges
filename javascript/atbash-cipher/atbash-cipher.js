KEY = {
  'a' : 'z',
  'b' : 'y',
  'c' : 'x',
  'd' : 'w',
  'e' : 'v',
  'f' : 'u',
  'g' : 't',
  'h' : 's',
  'i' : 'r',
  'j' : 'q',
  'k' : 'p',
  'l' : 'o',
  'm' : 'n',
  'n' : 'm',
  'o' : 'l',
  'p' : 'k',
  'q' : 'j',
  'r' : 'i',
  's' : 'h',
  't' : 'g',
  'u' : 'f',
  'v' : 'e',
  'w' : 'd',
  'x' : 'c',
  'y' : 'b',
  'z' : 'a'
}

var encode = function(phrase){
  // put letters in array without whitespace and no caps
  var cleanedPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/gi,'').split("");

  var encoded = [];

  // encode using key if it is a letter
  // else push current character
  for(var i = 0; i < cleanedPhrase.length; i++){
    if(cleanedPhrase[i].match(/[a-z]/)){
      encoded.push(KEY[cleanedPhrase[i]]);
    } else {
      encoded.push(cleanedPhrase[i]);
    }
  }

  return encoded.join("").replace(/(.{5})/g,"$1 ").trim();
}

module.exports = { encode };  