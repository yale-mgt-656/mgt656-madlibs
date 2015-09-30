var path = require("path");
var fs = require("fs");
var _ = require("lodash");
module.exports = {
  requireAll: function(start, directory, attribute){
    var normalizedPath = path.join(start, directory);
    var files = fs.readdirSync(normalizedPath);
    var retval1 = _.flatten(_.map(files, function(file) {
        var retval2 = require(path.join(normalizedPath, file))[attribute];
        return retval2;
    }));
    // console.log('attribute =', attribute);
    // console.log('retval1 =', retval1);
    return retval1;
  },
  requireLayout: function(start, directory) {
    var normalizedPath = path.join(start, directory);
    var files = fs.readdirSync(normalizedPath);
    var retval = _.flatten(files);
    return retval;
  }
};


