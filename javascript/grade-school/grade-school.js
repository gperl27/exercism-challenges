var School = function(){
  this.students = {};
}

School.prototype.roster = function () {
  var students = this.students;
  for(var key in students){
    students[key].sort();
  }
  return this.students;
}

School.prototype.add = function(name, grade){
  if(this.students[grade] === undefined){
    this.students[grade] = [];
  }
  this.students[grade].push(name);
}

School.prototype.grade = function(level){
  if(this.students[level] === undefined){
    return [];
  }
  return this.students[level].sort();
}

module.exports = School;