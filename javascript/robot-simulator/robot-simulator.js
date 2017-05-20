var Robot = function(){
  this.bearing = '';
  this.coordinates = [0,0];
}

Robot.prototype.orient = function (direction) {
  if(direction === 'east' || direction === 'west'
     || direction === 'north' || direction === 'south'){
       this.bearing = direction;
     } else {
       throw new Error('Invalid Robot Bearing');
     }
};

Robot.prototype.advance = function () {
  switch (this.bearing) {
    case 'north':
      this.coordinates[1] += 1;
      break;
    case 'east':
      this.coordinates[0] += 1;
      break;
    case 'south':
      this.coordinates[1] -= 1;
      break;
    case 'west':
      this.coordinates[0] -= 1;
      break;
  }
};

Robot.prototype.turnRight = function () {
  switch(this.bearing){
    case 'north':
      this.bearing = 'east';
      break;
    case 'east':
      this.bearing = 'south';
      break;
    case 'south':
      this.bearing = 'west';
      break;
    case 'west':
      this.bearing = 'north';
      break;
  }
};

Robot.prototype.turnLeft = function () {
  switch(this.bearing){
    case 'north':
      this.bearing = 'west';
      break;
    case 'east':
      this.bearing = 'north';
      break;
    case 'south':
      this.bearing = 'east';
      break;
    case 'west':
      this.bearing = 'south';
      break;
  }
};

Robot.prototype.instructions = function (actions) {
  var instructions = [];

  actions.split("").forEach(function(action){
    switch (action) {
      case 'A':
        instructions.push('advance');
        break;
      case 'R':
        instructions.push('turnRight');
        break;
      case 'L':
        instructions.push('turnLeft');
        break;
    }
  })

  return instructions;
};

Robot.prototype.place = function (robotData) {
  this.at(robotData.x, robotData.y);
  this.orient(robotData.direction);
};

Robot.prototype.evaluate = function (actions) {
  var self = this;
  var instructions = this.instructions(actions);

  instructions.forEach(function(action){
    switch(action){
      case 'advance':
        self.advance();
        break;
      case 'turnRight':
        self.turnRight();
        break;
      case 'turnLeft':
        self.turnLeft();
        break;
    }
  })
};

Robot.prototype.at = function (x,y) {
  this.coordinates[0] = x;
  this.coordinates[1] = y;
};

module.exports = Robot;
