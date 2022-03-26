const sumAll = function(firstNumber, lastNumber) {
    if (firstNumber > 0 && lastNumber > 0 && typeof firstNumber === 'number' && typeof lastNumber === 'number') {
    let sum = 0;
    if (firstNumber < lastNumber) {
        for(let i = firstNumber; i <= lastNumber; i++) {
        sum = sum + i;
        }
    } else if (firstNumber > lastNumber) {
        for(let i = firstNumber; i >= lastNumber; i--) {
            sum = sum + i;
        }
    }
    return sum;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
