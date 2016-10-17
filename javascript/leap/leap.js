const Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {

  let year = this.year;

  if (year % 4 === 0 && year % 100 !== 0 || year % 100 === 0 && year % 400 === 0){
    return true;
  } else {
    return false;
  }
};

module.exports = Year;