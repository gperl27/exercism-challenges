var Triangle = function(rows) {
  this.rows = this.computeRows(rows);
  this.lastRow = this.rows[this.rows.length - 1];
}

Triangle.prototype.computeRows = function (rows) {
  var initRows = [];

  for(var i = 0; i < rows; i++){
    var currentRow = [];
    for(var j = 0; j <= i; j++){
      // if previous row exists
      if(initRows[i - 1]){
        // if previous row left and current index exist
        if(initRows[i - 1][j - 1] && initRows[i - 1][j]){
          currentRow.push(initRows[i - 1][j - 1] + initRows[i - 1][j]);
        } else {
          currentRow.push(1);
        }
      } else {
        currentRow.push(1);
      }
    }
    initRows.push(currentRow);
  }

  return initRows;
};

module.exports = Triangle
