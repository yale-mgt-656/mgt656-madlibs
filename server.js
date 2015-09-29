var express = require('express');
var nunjucks = require('nunjucks');
var _ = require('lodash');
var app = express();

nunjucks.configure('stories', {
    autoescape: true,
    express: app
});

var requireAll = require('./lib/misc.js').requireAll;

function loadPartOfSpeech(part){
  var partsArray = requireAll(__dirname, part, part);
  return function(){
    console.log('partsArray =', partsArray);
    return _.sample(partsArray);
  };
}

var partsOfSpeech = ['nouns', 'verbs', 'adjectives', 'adverbs'];
var context = {};
_.each(partsOfSpeech, function(part){
  context[part] = {get: loadPartOfSpeech(part)};
});

app.get('/', function (req, res) {
  res.render('layout.html', context);
});

var server = app.listen(process.env.PORT, function () {
  console.log('Example app listening at http://%s:%s', process.env.IP, process.env.PORT);
});