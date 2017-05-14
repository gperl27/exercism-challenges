var Matrix = function(str){
  this.columns = [];
  this.rows    = [];

  this.delegateNums(str);
}

Matrix.prototype.delegateNums = function(str){
  var rows    = this.rows;
  var columns = this.columns;
  var chunks  = str.split("\n");


  // Delegate rows
  chunks.forEach(function(chunk){
    var r = [];
    chunk.split(' ').forEach(function(n){
      r.push(parseInt(n, 10));
    });
    rows.push(r);
  });

  // Delegate columns
  // we have to do this a bit differently
  // because the values are not delegated linearly
  // prepopulate columns with chunks len of arrays
  for(var i = 0; i < chunks.length; i++){
    columns[i] = [];
  }

  for(var i = 0; i < chunks.length; i++){
    var chunk = chunks[i].split(" ");

    for(var j = 0; j < chunk.length; j++){
      if(columns[j]){
        columns[j].push(parseInt(chunk[j], 10));
      }
    }
  }
}

module.exports = Matrix;
