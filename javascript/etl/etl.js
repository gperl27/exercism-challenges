var Etl = function () {}

Etl.prototype.transform = function(old){
  var newScore = {};

  for(var key in old){

    var keyArray = old[key]
    var keyLength = keyArray.length;

    for(var i = 0; i < keyLength; i++){
      newScore[keyArray[i].toLowerCase()] = parseInt(key);
    }
  }

  return newScore;
}

module.exports = Etl;