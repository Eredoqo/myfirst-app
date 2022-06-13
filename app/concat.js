const fs = require('fs');
const _ = require('lodash');

let rawdata = fs.readFileSync('./data.json');
let num = JSON.parse(rawdata);
const numberss = num.numbers;

function concat(arr){
    return _.concat(arr, numberss)
}

module.exports.concat = concat;