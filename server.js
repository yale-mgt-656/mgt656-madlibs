var express = require('express');
var nunjucks = require('nunjucks');
var nouns = require('./nouns.js');
var verbs = require('./verbs.js');

var app = express();
nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.get('/', function (req, res) {
  res.render('layout.html', {nouns: nouns, verbs: verbs});
});

var server = app.listen(process.env.PORT, function () {

  console.log('Example app listening at http://%s:%s', process.env.IP, process.env.PORT);

})