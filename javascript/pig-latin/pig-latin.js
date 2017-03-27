module.exports = {
  translate: function(text){
    var VOWELS = /[aeiou]/g;
    return text.split(" ").map(function(word){
      var firstVowel = word.search(VOWELS);

      // qu special case
      if(word[firstVowel - 1] === 'q'){
        firstVowel++;
      }

      var cut = word.slice(0, firstVowel);
      var body = word.slice(firstVowel);

      return body + cut + 'ay';
    }).join(" ");
  }
}
