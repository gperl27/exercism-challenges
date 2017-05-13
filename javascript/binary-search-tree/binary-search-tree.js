var Bst = function(num){
  this.data  = num;
  this.left  = null;
  this.right = null;
}

Bst.prototype.insert = function(n){
  var node = this.leftOrRight(n);

  this[node] ? this[node].insert(n) : this[node] = new Bst(n);
}

Bst.prototype.each = function(fn){
  // sm, data, lg
  this.left ? this.left.each(fn) : null;
  fn(this.data);
  this.right ? this.right.each(fn) : null;
}

Bst.prototype.leftOrRight = function(n){
  return n <= this.data ? 'left' : 'right';
}

module.exports = Bst;
