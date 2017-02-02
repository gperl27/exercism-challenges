var ITEMS = {
  'allergen'     : 512,
  'allergen'     : 256,
  'cats'         : 128,
  'pollen'       : 64,
  'chocolate'    : 32,
  'tomatoes'     : 16,
  'strawberries' : 8,
  'shellfish'    : 4,
  'peanuts'      : 2,
  'eggs'         : 1
};

var Allergies = function(score){
  this.score = score;
  this.allergies = [];
}

Allergies.prototype.list = function(){
  if(this.score === 0){
    return [];
  }

  for(var prop in ITEMS){
    if(this.score - ITEMS[prop] >= 0){
      this.allergies.push(prop);
      this.score -= ITEMS[prop];
    }
  }

  this.allergies = this.allergies.filter(function(a){return a !== 'allergen'});

  return this.allergies.reverse();
}

Allergies.prototype.allergicTo = function(item){
  this.list();
  return this.allergies.indexOf(item) !== -1;
}

module.exports = Allergies;