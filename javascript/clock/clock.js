var Clock = function(hour, minute) {
    if (typeof minute === 'undefined') {
        this.minute = 0;
    } else {
        this.minute = minute;
    }

    this.hour = hour;
}


Clock.prototype.toString = function() {
  var hour = this.hour;
  var minute = this.minute;

  // subtract carryover minutes from hours
  if(minute < 0){
    var negativeMinuteConverter = convertNegativeMinutes(minute);
    minute = negativeMinuteConverter[0];
    hour -= negativeMinuteConverter[1];
  }

  if(hour < 0){
    hour = convertNegativeHours(hour);
  }

  // add carryover minutes to hours
  var minuteConverter = convertMinutes(minute);
  minute = minuteConverter[0];
  hour += minuteConverter[1];

  // now convert hours
  hour = convertHours(hour);

  if(hour < 10){
    hour = "0" + hour;
  }

  if(minute > 0 && minute < 10){
    minute = "0" + minute;
  } else if(minute === 0){
    minute = "00";
  }

  return hour + ":" + minute;
}

Clock.prototype.plus = function(num){
  this.minute += num;
  return new Clock(this.hour, this.minute);
}

Clock.prototype.minus = function(num){
  this.minute -= num;
  return new Clock(this.hour, this.minute);
}

Clock.prototype.equals = function(otherClock){
  return new Clock(this.hour, this.minute).toString() === otherClock.toString();
}

/**********************************************************************/
/** HELPER FUNCTIONS */

function convertHours(hour){
  while(hour >= 24){
    hour -= 24;
  }

  return hour;
}

function convertMinutes(minute){
  var hoursToAdd = 0;

  while(minute >= 60){
    minute -= 60;
    hoursToAdd++;
  }

  return [minute, hoursToAdd];
}

function convertNegativeHours(hour){
  while(hour < 0){
    hour += 24;
  }

  return hour;
}

function convertNegativeMinutes(minute){
  var hoursToSubtract = 0;

  while(minute < 0){
    minute += 60;
    hoursToSubtract++;
  }

  return [minute, hoursToSubtract];
}

module.exports = {
    at: function(h, m) {
        return new Clock(h, m);
    }
}