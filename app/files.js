const fs = require('fs');

let numbersFromJson = fs.readFileSync('data.json');
let numbersJson = JSON.parse(numbersFromJson);

module.exports.numbersJson = numbersJson;