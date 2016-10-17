const Hamming = function() {};

Hamming.prototype.compute = function(seq1, seq2){
  //no difference in grabbing seq1 or seq2 length bc they need to be the same
  let len = seq1.length;

  //check for different lengths
  if(len !== seq2.length){
    throw Error('DNA strands must be of equal length.');
  }

  seq1 = seq1.split("");
  seq2 = seq2.split("");

  //count differences between 2 strings
  let count =  0;

  for(var i = 0; i<len;i++){
    if (seq1[i] !== seq2[i]){
      count++;
    }
  }

  return count;

}

module.exports = Hamming;