var PhoneNumber = function(num) {
  this.num = cleanNumber(num);
};

PhoneNumber.prototype.number = function() {
  var num = this.num;

  if(isEleven(num)){
    if(isValidEleven(num)){
      return num.slice(1);
    } else {
      return "0000000000";
    }
  } else if(lessThanTen(num)){
    return "0000000000";
  } else {
    return num;
  } 
}

PhoneNumber.prototype.areaCode = function() {
  return this.num.slice(0, 3);
}

PhoneNumber.prototype.toString = function() {
  var num = this.num;
  var areaCode = num.slice(0, 3);
  var firstHalf = num.slice(3, 6);
  var secondHalf = num.slice(6, 10);

  return "(" + areaCode + ") " + firstHalf + "-" +secondHalf;
}

function cleanNumber(num){
  return num.replace(/\D+/g, "");
}

function isEleven(num){
  return num.length === 11;
}

function isValidEleven(num){
  return num[0] === '1';
}

function lessThanTen(num){
  return num.length < 10
}

module.exports = PhoneNumber;