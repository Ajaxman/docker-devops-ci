//My first app in express and jade
'use strict';

var express = require('express');
var app = express();
var PORT = 8080;

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');
app.get('/', function(req, res){
  res.render('home', {
  });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
//module.exports.getApp = app;
