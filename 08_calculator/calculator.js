const add = function(firstNumber, secondNumber) {
	const total = firstNumber + secondNumber;
  return total;
};

const subtract = function(firstNumber, secondNumber) {
	const total = firstNumber - secondNumber;
  return total;
};

const sum = function(arrayOfNumbers) {
  let total = 0;
  for(let i = 0; i < arrayOfNumbers.length; i++) {
    total += arrayOfNumbers[i];
  }
  return total;
};

const multiply = function(arrayOfNumbers) {
  let total = 1;
  for(let i = 0; i < arrayOfNumbers.length; i++) {
    total = total * arrayOfNumbers[i]; 
  }
  return total;
};

const power = function(firstNumber, secondNumber) {
	let total = firstNumber ** secondNumber;
  return total;
};

const factorial = function(number) {
	let total = 1;
  for(let i = 1; i <= number; i++) {
    if(number === 0) {
      return 1;
    }
    total = total * i;
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
