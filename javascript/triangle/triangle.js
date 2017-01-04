var Triangle = function(side1, side2, side3){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.kind = function() {
  var s1 = this.side1;
  var s2 = this.side2;
  var s3 = this.side3;

  if(checkNoSize(s1, s2, s3)){
    throw "Triangle needs to have sides";
  }
  
  if(!checkInequality(s1, s2, s3) ||
     !checkInequality(s1, s3, s2) ||
     !checkInequality(s2, s3, s1)){
    throw "Triangle inequality violation";
  }

  var type = "";

  if(s1 === s2 && s1 === s3){
    type = "equilateral";
  } else if (s1 !== s2 && s1 !== s3 && s2 !== s3){
    type = "scalene";
  } else {
    type = "isosceles";
  }

  return type;
}

function checkInequality(x, y, z){
  return x + y >= z;
}

function checkNoSize(x, y, z){
  return x === 0 && y === 0 && z === 0;
}

module.exports = Triangle;