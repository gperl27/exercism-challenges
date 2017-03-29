var Triplet = function(x, y, z){
  this.x = x;
  this.y = y;
  this.z = z;
}

Triplet.prototype.sum = function(){
  return this.x + this.y + this.z;
}

Triplet.prototype.product = function(){
  return this.x * this.y * this.z;
}

// a^2 + b^2 = c^2
Triplet.prototype.isPythagorean = function(){
  return Math.pow(this.x, 2) + Math.pow(this.y, 2) === Math.pow(this.z, 2);
}

Triplet.where = function(conditions){
  // find triplets
  var triplets = [];

  for(var a = conditions.minFactor || 1; a <= conditions.maxFactor; a++){
    for(var b = a; b <= conditions.maxFactor; b++){
      for(var c = b; c <= conditions.maxFactor; c++){
        var triplet = new Triplet(a,b,c);
        // filter on sum
        var isSum = !conditions.sum || (conditions.sum === triplet.sum());

        if(triplet.isPythagorean() && isSum){
          triplets.push(triplet);
        }
      }
    }
  }
  return triplets;
}

module.exports = Triplet;
