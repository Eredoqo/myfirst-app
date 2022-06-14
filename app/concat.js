const _ = require('lodash');
const numbersFromJson = require('./files');

const numbers = numbersFromJson.numbersJson.number;

function concat(array) {
    return _.concat(array, numbers)
}

module.exports.concat = concat