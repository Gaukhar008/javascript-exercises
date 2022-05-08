const fibonacci = function(number) {
    if(number < 0) {
        return 'OOPS';
    }
let array = [];
let first = 0;
let second = 1;
array.push(first, second);
let sum;

for (let i = 0; i < number; i++) {
sum = first + second;
array.push(sum);
first = second;
second = sum;
}
return array[number];
};

// Do not edit below this line
module.exports = fibonacci;
