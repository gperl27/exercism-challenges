var SpaceAge = function(seconds){
  this.seconds = seconds;
  this.earthTime = this.seconds/31557600.0;
}

SpaceAge.prototype.onEarth = function() {
  return round(this.earthTime, 100.0);
}

SpaceAge.prototype.onMercury = function() {
  return round(this.earthTime/0.2408467, 100.0);
}

SpaceAge.prototype.onVenus = function() {
  return round(this.earthTime/0.61519726, 100.0);
}

SpaceAge.prototype.onMars = function() {
  return round(this.earthTime/1.8808158, 100.0);
}

SpaceAge.prototype.onJupiter = function() {
  return round(this.earthTime/11.862615, 100.0);
}

SpaceAge.prototype.onSaturn = function() {
  return round(this.earthTime/29.447498, 100.0);
}

SpaceAge.prototype.onUranus = function() {
  return round(this.earthTime/84.016846, 100.0);
}

SpaceAge.prototype.onNeptune = function() {
  return round(this.earthTime/164.79132, 100.0);
}

function round(num, toDecimal){
  return Math.round(num * toDecimal)/toDecimal;
}

module.exports = SpaceAge;