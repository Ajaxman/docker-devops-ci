//My first app in express and jade
'use strict';

var express = require('express'),
  app.express();

app.set('views', 'views');
app.set('view engine', 'jade');
app.get('/', function(res, req){
  res.render('home', {
  });
});
