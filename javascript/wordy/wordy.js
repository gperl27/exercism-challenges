var WordProblem = function(question){
  this.operands  = this.getOperands(question);
  this.operators = this.getOperators(question);
}

WordProblem.prototype.getOperands = function(question){
  return question.match(/-\d+|\d+/g);
}

WordProblem.prototype.getOperators = function(question){
  return question.match(/(plus|minus|multiplied by|divided by)/g);
}

WordProblem.prototype.answer = function(){
  if(!this.operators || !this.operands){
    throw new ArgumentError();
  }

  eqBuilder = '';

  for(var i = 0; i < this.operands.length; i++){
    // spec asks to evaluate left to right no matter
    // add paren around first operation
    i === 0 ? eqBuilder += '(' : null;

    eqBuilder += ' ';
    eqBuilder += this.operands[i];

    i === 1 ? eqBuilder += ')' : null;

    if(this.operators[i]){
      eqBuilder += ' ';
      eqBuilder += operatorChooser(this.operators[i]);
    }
  }

  return eval(eqBuilder);
}


function operatorChooser(operator){
  switch(operator){
    case 'plus':
      return '+';
      break;
    case 'minus':
      return '-';
      break;
    case 'multiplied by':
      return '*';
      break;
    case 'divided by':
      return '/';
      break;
  }
}

var ArgumentError = function() {}

module.exports = { WordProblem, ArgumentError };
