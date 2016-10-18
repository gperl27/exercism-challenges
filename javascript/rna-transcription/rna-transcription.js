const DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function(dna){
  return dna.split("").map(function(strand){
    switch(strand) {
      case "G":
        return strand = "C"
      case "C":
        return strand = "G"
      case "T":
        return strand = "A"
      case "A":
        return strand = "U"
      default:
        return strand = ""
    }
  }).join("");
}

module.exports = DnaTranscriber;