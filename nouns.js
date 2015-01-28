var lodash = require('lodash');

var nouns = [
    'man',
    'bear',
    'pig'
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(nouns);
};