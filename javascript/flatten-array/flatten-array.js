var Flattener = function(){};

Flattener.prototype.flatten = function(arr){
  var self = this;

  // flatten array, account for nested arrays
  // then remove null values from array
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? self.flatten(toFlatten) : toFlatten);
      }, []).filter(function(ele){
        return ele !== null;
      });
}

module.exports = Flattener;
