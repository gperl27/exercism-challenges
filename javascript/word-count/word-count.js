var Words = function () {};

Words.prototype.count = function(word){
  var counts = {};
  var regex = /\s+/;
  var trailingWhitespace = /^\s+|\s+$/g;

  if (trailingWhitespace.test(word)){
    word = word.replace(trailingWhitespace, "");
  }
  
  var words_array = word.replace(regex, " ")
      .split(" ");

  words_array.forEach(function(word) {
    word = word.toLowerCase();
    if(counts[word] === undefined){
      counts[word] = 1;
    } else {
      if(typeof counts[word] === 'function'){
        counts[word] = 0;
      }
      counts[word]++;
    }
  });

  return counts;
}

module.exports = Words;