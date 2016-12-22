var FoodChain = function() {
	this.introVerse = "I know an old lady who swallowed a ";
	this.lastOfStanza = "I don't know why she swallowed the fly. Perhaps she'll die.\n";
	this.finalVerse = "She's dead, of course!\n";

	this.actionVerseFirsthalf = "She swallowed the ";
	this.actionVerseSecondhalf = " to catch the ";

	// spider and birdverses are not dynamic
	// repeated nearly every stanza
	this.spider = "She swallowed the spider to catch the fly.\n";
	this.birdVerse = "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n";
	
	this.animals = {
		1 : { 
				'name' : 'fly',
				'catchphrase' : '' 
			},
		2 : { 
				'name' : 'spider',
				'catchphrase' : 'It wriggled and jiggled and tickled inside her.\n' 
			},
		3 : { 
				'name' : 'bird',
				'catchphrase' : 'How absurd to swallow a bird!\n' 
			},
		4 : { 
				'name' : 'cat',
				'catchphrase' : 'Imagine that, to swallow a cat!\n' 
			},
		5 : { 
				'name' : 'dog',
				'catchphrase' : 'What a hog, to swallow a dog!\n' 
			},
		6 : { 
				'name' : 'goat',
				'catchphrase' : 'Just opened her throat and swallowed a goat!\n' 
			},
		7 : { 
				'name' : 'cow',
				'catchphrase' : "I don't know how she swallowed a cow!\n"
			},
		8 : { 
				'name' : 'horse',
				'catchphrase' : '' 
			}
	}
}

FoodChain.prototype.verses = function(start, end){
	var song = "";

	for(var i = start; i <= end; i++){
		song += this.verse(i) + "\n";
	}

	return song;
}

FoodChain.prototype.verse = function(num){
	var stanza = "";
	var currentAnimal = this.animals[num];
	var previousAnimal = this.animals[num-1];

	switch(num){
		case 1:
			stanza += stanzaIntro(this.introVerse, currentAnimal.name, currentAnimal.catchphrase);
			stanza += this.lastOfStanza;
			break;
		case 2:
			stanza += stanzaIntro(this.introVerse, currentAnimal.name, currentAnimal.catchphrase);
			stanza += stanzaAction(this.actionVerseFirsthalf, currentAnimal.name, this.actionVerseSecondhalf, previousAnimal.name);
			stanza += this.lastOfStanza;
			break;
		case 3:
			stanza += stanzaIntro(this.introVerse, currentAnimal.name, currentAnimal.catchphrase);
			stanza += stanzaOutro(this.birdVerse, this.spider, this.lastOfStanza);
			break;
		case 4:
		case 5:
		case 6:
		case 7:
			stanza += stanzaIntro(this.introVerse, currentAnimal.name, currentAnimal.catchphrase);
			var i = num;
			while(i >= 4){
				stanza += stanzaAction(this.actionVerseFirsthalf, this.animals[i].name, this.actionVerseSecondhalf, this.animals[i-1].name);
				i--
			}
			stanza += stanzaOutro(this.birdVerse, this.spider, this.lastOfStanza);
			break;
		case 8:
			stanza += stanzaIntro(this.introVerse, currentAnimal.name, currentAnimal.catchphrase);
			stanza += this.finalVerse;
	}
	return stanza;
}

function stanzaIntro(intro, name, catchphrase){
	return intro + name + ".\n" + catchphrase;
}

function stanzaAction(first, current, second, previous){
	return first + current + second + previous + ".\n";
}

function stanzaOutro(bird, spider, last){
	return bird + spider + last;
}

module.exports = FoodChain;