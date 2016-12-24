var Robot = function () {
  this.theName = "";
}

Robot.prototype.name = function() {
  return this.name;
}

function randomChar(){
  var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return charAt(Math.floor(Math.random() * capitalLetters.length));
}

module.exports = Robot;