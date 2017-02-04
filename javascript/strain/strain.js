var keep = function(array, condition){
  return array.filter(condition);
}

var discard = function(array, condition){
  return array.filter(e => !condition(e));
}

module.exports = { keep, discard };