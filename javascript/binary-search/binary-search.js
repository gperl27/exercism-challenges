var BinarySearch = function(numArr){
  this.array = this.isSorted(numArr);
}

BinarySearch.prototype.isSorted = function(arr){
  var sorted = true;

  for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
          sorted = false;
          break;
      }
  }

  return !sorted ? undefined : arr;
}

BinarySearch.prototype.indexOf = function(key){
  return search(this.array, key, 0, this.array.length);
}

function search(arr, key, start, end){
  if (start === end) return -1;

  var middle = Math.floor((start + end)/2);

  if (arr[middle] > key){
    return search(arr, key, start, middle);
  } else if (arr[middle] < key){
    return search(arr, key, middle + 1, end);
  } else {
    return middle;
  }

}

module.exports = BinarySearch;
