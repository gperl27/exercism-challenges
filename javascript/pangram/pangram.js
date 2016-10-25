var Pangram = function(phrase) {
  this.phrase = phrase;
  this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
};

Pangram.prototype.isPangram = function() {
  var phrase = this.phrase.toLowerCase();

  var letterCount = 0;
  this.alphabet.forEach(function(letter){
    if (phrase.match(letter) !== null){
      letterCount++;
    }
  });

  return (letterCount >= 26);

}

module.exports = Pangram;