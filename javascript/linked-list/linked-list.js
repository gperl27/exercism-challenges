var LinkedList = function(){
  this.list = [];
}

LinkedList.prototype.push = function(n){
  this.list.push(n);
}

LinkedList.prototype.pop = function(){
  return removeEle(this.list, -1);
}

LinkedList.prototype.shift = function(){
  return removeEle(this.list, 0);
}

LinkedList.prototype.unshift = function(n){
  this.list.unshift(n);
}

LinkedList.prototype.count = function(){
  return this.list.length;
}

LinkedList.prototype.delete = function(n){
  var indexToRemove = this.list.indexOf(n);

  if(indexToRemove !== -1){
    return removeEle(this.list, indexToRemove);
  }
}

// Helper function to delete an element at a specific index
function removeEle(arr, index){
  var removed = arr.splice(index, 1);
  return parseInt(removed.join(""));
}

module.exports = LinkedList;
