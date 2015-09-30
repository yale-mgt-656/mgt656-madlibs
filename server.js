var express = require('express');
var nunjucks = require('nunjucks');
var _ = require('lodash');
var app = express();

nunjucks.configure('stories', {
    autoescape: true,
    express: app
});

var context = require('./lib/misc.js').getPOS(__dirname, 'pos');

// When no template is specified, choose one randomly
app.get('/', function(req, res) {
  var allLayouts = require('./lib/misc.js').requireLayout(__dirname, 'stories');
  res.render(_.sample(allLayouts), context);
});

// Route to a particular template if one is specified
app.get('/:template', function(req, res) {
  res.render(req.params.template, context);
});

var server = app.listen(process.env.PORT, function () {
  console.log('Example app listening at http://%s:%s', process.env.IP, process.env.PORT);
});
