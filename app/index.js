const SortedArray = require('sorted-array-async');
const concat = require('./concat');
const sum = require('./sum');

const numbersToConcat = [1, 10, 40, 80, 150];
const numbersToAdd = [20, 30, 60, 15, 9];

const result = concat.concat(numbersToConcat);

setTimeout(() => {
    const result2 = sum.sum(numbersToAdd)
    console.log(`The result of our sum is: ${result2}`)
}, 2000);

const instance = new SortedArray(result);

let defaultArray;

instance
    .getArray()
    .then(array => {
    defaultArray = array
    console.log(`The result of our concat array sorted is: [ ${defaultArray.toString()} ]`)
    console.log('Printing out our sum of the array with a timeout:')
});

console.log(`The result of our concat is: [ ${result} ]`);