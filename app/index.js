const calc = require('./calc');
const concat = require('./concat');


const numberToAdd = [1, 2, 3, 4, 5];
const numbersToConcat = [1, 2, 3, 4, 5];


const result = calc.sum(numberToAdd);
const result2 = concat.concat(numbersToConcat);
console.log(`The result of the sum is ${result}`);
console.log(`The result of the concat is ${result2}`);