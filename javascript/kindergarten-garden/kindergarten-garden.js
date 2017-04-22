var STUDENTS = [
  'Alice', 'Bob', 'Charlie', 'David',
  'Eve', 'Fred', 'Ginny', 'Harriet',
  'Ileana', 'Joseph', 'Kincaid', 'Larry'
]

var Garden = function(plants, students){
  this.row1 = [];
  this.row2 = [];

  this.organizePlants(plants);

  var students = students || STUDENTS;
  
  this.organizeStudents(students);
}

Garden.prototype.organizeStudents = function(students){
    // put in alphabetical order
    students.sort();

    var plantCount = 0;
    for(var i = 0; i < students.length; i++){
      var student = students[i].toLowerCase();

      this[student] = this.retrievePlants([plantCount, plantCount + 1]);

      plantCount += 2;
    }
}

Garden.prototype.organizePlants = function(plants){
  // plants always come in as order XXXXX\nXXXXXX
  // each student puts 2 plants in each row
  // split the rows by \n and add the plants to the row in orderly fashion
  var splitPlants = plants.split("\n");

  // need to split indivdually so we can pick one plant at a time
  pushPlant(splitPlants[0], this.row1);
  pushPlant(splitPlants[1], this.row2);
}

Garden.prototype.retrievePlants = function(plantNumbers){
  var studentPlants = [];

  fetchPlant(studentPlants, plantNumbers, this.row1);
  fetchPlant(studentPlants, plantNumbers, this.row2);

  return decodePlant(studentPlants);
}


// translates letters to the actual plants
function decodePlant(plantArr){
  return plantArr.map(function(plant){
    switch(plant){
      case 'G':
        return 'grass';
      case 'C':
        return 'clover';
      case 'R':
        return 'radishes';
      case 'V':
        return 'violets';
    }
  })
}

// helper function for delegating where plants are and from whom
function fetchPlant(studentPlants, plantNumbers, row){
  plantNumbers.forEach(function(orderNum){
    studentPlants.push(row[orderNum]);
  })
}

// helper function for organizing garden rows
function pushPlant(arr, row){
  arr.split("").forEach(function(plant){
    row.push(plant);
  })
}

module.exports = Garden;
