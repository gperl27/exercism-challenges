var Isogram = function (word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function() {
  var word = this.word.replace(/[^a-zA-Zé]/g, "");
  word = word.toLowerCase().split("");

  var isFalse = true;

  word.forEach(function(letter){
    if(checkRepeats(word, letter)){
      isFalse = false;
    };
  });

  return isFalse;
}

function checkRepeats(array, letter){
  var count = 0;
  var isRepeat = false;

  array.forEach(function(l){
    if(letter === l){
      count++;
    }
    if (count > 1) {
      isRepeat = true;
    }
  });

  return isRepeat;
}

module.exports = Isogram;