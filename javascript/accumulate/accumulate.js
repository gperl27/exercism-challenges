module.exports = function(collection, operation){
  var accCollection = [];
  collection.forEach(function(item){
    accCollection.push(operation(item));
  });
  return accCollection;
}
