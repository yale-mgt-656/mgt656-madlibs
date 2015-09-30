var path = require("path");
var fs = require("fs");
var _ = require("lodash");

function requireAll(start, directory, attribute) {
  var normalizedPath = path.join(start, directory);
  var files = fs.readdirSync(normalizedPath);
  var retval1 = _.flatten(_.map(files, function(file) {
      var retval2 = require(path.join(normalizedPath, file))[attribute];
      return retval2;
  }));
  return retval1;
}

function loadPartOfSpeech(start, part){
  var partsArray = requireAll(start, part, part);
  return function(){
    return _.sample(partsArray);
  };
}

module.exports = {
  getPOS: function(start, dir){
    var normalizedPath = path.join(start, dir);
    var directories = fs.readdirSync(normalizedPath);
    var pos = {};
    _.each(directories, function(d){
      pos[d] = {get: loadPartOfSpeech(normalizedPath, d)};
    });
    return pos;
  },
  requireLayout: function(start, directory) {
    var normalizedPath = path.join(start, directory);
    var files = fs.readdirSync(normalizedPath);
    var retval = _.flatten(files);
    return retval;
  }
};
