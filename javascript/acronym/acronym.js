var parse = function(phrase) {
  var regex = /[A-Z]+[a-z]*|[a-z]+/g;
  var acronym = "";

  phrase = phrase.match(regex);

  phrase.forEach(function(word){
    acronym += word[0].toUpperCase();
  });

  return acronym;
}

module.exports = { parse };