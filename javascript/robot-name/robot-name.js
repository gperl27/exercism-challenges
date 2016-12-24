var usedNames = {};

var Robot = function () {
  this.name = createName();
  this.checkNames();
}

Robot.prototype.checkNames = function() {
  while(checkRepeats(usedNames, this.name)){
    this.name = createName();
  }
  usedNames[this.name] = true;
}

Robot.prototype.reset = function() {
  this.name = createName();
  this.checkNames();
}

function createName(){
  var name = "";
  name += randomChar();
  name += randomChar();
  name += randomNum();
  name += randomNum();
  name += randomNum();
  return name;
}

function randomChar(){
  var capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
}

function randomNum(){
  var numbers = "0123456789";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function checkRepeats(usedNames, name){
  return usedNames[name] !== undefined;
}

module.exports = Robot;