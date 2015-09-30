var express = require('express');
var nunjucks = require('nunjucks');
var _ = require('lodash');
var app = express();

nunjucks.configure('stories', {
    autoescape: true,
    express: app
});

var requireAll = require('./lib/misc.js').requireAll;
var requireLayout = require('./lib/misc.js').requireLayout;

function loadPartOfSpeech(part){
  var partsArray = requireAll(__dirname, part, part);
  return function(){
    // console.log('partsArray =', partsArray);
    return _.sample(partsArray);
  };
}

var partsOfSpeech = ['nouns', 'verbs', 'adjectives', 'adverbs'];
var context = {};
_.each(partsOfSpeech, function(part){
  context[part] = {get: loadPartOfSpeech(part)};
});

// Get an array of all filenames.
var allLayouts = requireLayout(__dirname, 'stories');
// Set the origin into a random route.
app.get('/', function(req, res) {
  res.render(_.sample(allLayouts), context);
});
// Loop through each of the files in stories and render them.
_.each(allLayouts, function(layout) {
  var newlayout = layout.replace(".html", "");
  app.get('/' + newlayout, function (req, res) {
    res.render(layout, context);
  });
});

var server = app.listen(process.env.PORT, function () {
  console.log('Example app listening at http://%s:%s', process.env.IP, process.env.PORT);
});