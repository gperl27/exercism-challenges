var circularBuffer = function(spaces){
  this.spaces = spaces;
  this.filled = [];
  this.index = 0;
}

circularBuffer.prototype.write = function(element){
  if(element != null || element != undefined){
    if(this.filled.length === this.spaces){
      throw "Buffer is full";
    } else {
      this.filled.push(element);
    }
  }
}

circularBuffer.prototype.forceWrite = function(element){
  if(this.filled.length < this.spaces){
    this.write(element);
  } else {
    this.filled[this.index] = element;
    this.filled.sort()
  }
}

circularBuffer.prototype.clear = function(){
  this.filled = [];
}

circularBuffer.prototype.read = function(){
  if(this.filled.length < 1){
    bufferEmptyException();
  }

  if(this.filled.length === this.spaces){
    bufferFullException();
  }

  var oldIndex = this.index;
  this.index++;

  return this.filled[oldIndex];
}

// Exceptions

var bufferEmptyException = function(){
  console.log("Buffer is empty");
}

var bufferFullException = function(){
  console.log("Buffer is full");
}

module.exports = {  bufferEmptyException,
                    bufferFullException, 
                    circularBuffer: function(e){
                        return new circularBuffer(e);
                    }
                 };