var Gigasecond = function(time) {
  this.time = time;
};

Gigasecond.prototype.date = function () {
  var gsFromDate = new Date(1e12 + this.time.getTime());
  return new Date(gsFromDate);
}

module.exports = Gigasecond;