var Anagram = function(word){
	this.word = word;
}

Anagram.prototype.matches = function(word_arr) {
	if(typeof word_arr !== 'object'){
		word_arr = [...arguments];
	}

	var theWord = this.word;
	var sortedWord = sortLetters(this.word);
	var matchingArr = [];
	
	word_arr.forEach(function(word){
		if(sortedWord === sortLetters(word) && !alreadyMatching(theWord, word)) {
			matchingArr.push(word);
		}
	});

	return matchingArr;
}

function sortLetters(str){
	return str.toLowerCase().split("").sort().join("");
}

function alreadyMatching(theWord, wordFromArray){
	return theWord.toLowerCase() === wordFromArray.toLowerCase();
}



module.exports = Anagram;