var Crypto = function(message){
  this.message = message;
}

Crypto.prototype.normalizePlaintext = function(){
  return this.message.replace(/[^a-z\d]/gi, '').toLowerCase();
}

Crypto.prototype.size = function(){
  var len = this.normalizePlaintext().length;
  var c = 0;
  var r = 0;

  // perfect square r & c
  while(c*r < len){
    c++;
    r++;
  }

  return c;
}

Crypto.prototype.plaintextSegments = function(){
  var msg = this.normalizePlaintext();
  var chunks = [];
  for (var i = 0, charsLength = msg.length; i < charsLength; i += this.size()) {
      chunks.push(msg.substring(i, i + this.size()));
  }
  return chunks;
}

Crypto.prototype.ciphertext = function(){
  var cipherStr = '';
  var chunkMsg = this.plaintextSegments();

  var cycle = 0;
  while(cipherStr.length < this.normalizePlaintext().length){
    for(var i = 0; i < chunkMsg.length; i++){
      if(chunkMsg[i][cycle] !== undefined){
        cipherStr += chunkMsg[i][cycle];
      }
    }
    cycle++;
  }

  return cipherStr;
}

module.exports = Crypto;
