var SecretHandshake = function(code){
  if(typeof code != 'number'){
    throw 'Handshake must be a number';
  }
  // 1, 10, 100, 1000, 10000
  this.keys = ['wink', 'double blink', 'close your eyes', 'jump', 'reverse'];
  this.code = code;
}

SecretHandshake.prototype.commands = function(){
  var shake = [];
  for(var i = 0; i < this.keys.length; i++){
    if(this.code & Math.pow(2, i)){
      if(this.keys[i] === 'reverse'){
        shake.reverse();
      } else {
        shake.push(this.keys[i]);
      }
    }
  }
  return shake;
}

module.exports = SecretHandshake;
