const _ = require('lodash')


function concat(arr){
    return _.concat(arr, [6, 7, 8, 9, 10])
}



module.exports.concat = concat;