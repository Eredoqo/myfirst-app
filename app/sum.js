const numbersFromJson = require('./filereader');
const data = numbersFromJson.numbersJson.number;
const sumJson = data.reduce((sum, numeric) => sum + numeric, 0);

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b
    }, sumJson)
}

module.exports.sum = sum;