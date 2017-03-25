module.exports = Cipher = function(key) {
  if( key !== undefined && !key.match(/^[a-z]+$/) ){
    throw Error("Bad key");
  }
  this.key = key || 'aaaaaaaaaa';
}

Cipher.prototype.encode = function(str){
  var encoded = [];
  var shift;
  var strCharCode;
  for(var i = 0; i < this.key.length; i++){
    strCharCode = str.charCodeAt(i) - 97;
    shift = this.key.charCodeAt(i) - 97;

    encoded.push(wrapCheck(strCharCode, shift));
  }

  return encoded.join('');
}

Cipher.prototype.decode = function(cipher){
  var decoded = [];
  var shift;
  var strCharCode;
  for(var i = 0; i < this.key.length; i++){
    strCharCode = cipher.charCodeAt(i) - 97;
    shift = this.key.charCodeAt(i) - 97;

    // spec didnt ask for wrap check
    decoded.push(String.fromCharCode(strCharCode - shift + 97));
  }

  return decoded.join('');
}

function wrapCheck(code, shift){
  if(code + shift + 97 > 122){
    // lazy math
    return String.fromCharCode(code + shift + 97 - 26);
  } else {
    return String.fromCharCode(code + shift + 97);
  }
}
