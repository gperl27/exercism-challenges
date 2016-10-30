function BeerSong() {};

BeerSong.prototype.verse = function(n){
  switch(n){
    case 2:
      return n + ' bottles of beer on the wall, ' + n + ' bottles of beer.' +
      '\nTake one down and pass it around, ' + (n-1) + ' bottle of beer on the wall.\n';
    case 1:
      return n + ' bottle of beer on the wall, ' + n + ' bottle of beer.' +
      '\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    case 0:
      return 'No more bottles of beer on the wall, no more bottles of beer.' +
      '\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    default:
      return n + ' bottles of beer on the wall, ' + n + ' bottles of beer.' +
      '\nTake one down and pass it around, ' + (n-1) + ' bottles of beer on the wall.\n';
  }
}

BeerSong.prototype.sing = function(){
  var self = this;
  var verses = Array.from(arguments);
  var begin = verses[0];
  var end;
  
  if(verses.length > 1){
    end = verses[verses.length-1];
  } else {
    end = 0;
  }

  var fullSong = [];

  for(var i = begin; i >= end; i--){
    fullSong.push(self.verse(i));
  }

  return fullSong.join("\n");
}

module.exports = BeerSong;