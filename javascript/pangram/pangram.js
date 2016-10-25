var Pangram = function(phrase) {
  this.phrase = phrase;
};

Pangram.prototype.isPangram = function() {
  var phrase = this.phrase.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  var count = 0;
  alphabet.forEach(function(letter){
    if (phrase.match(letter) !== null){
      count++;
    }
  });

  return (count >= 26);

}

module.exports = Pangram;