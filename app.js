var app            = require('express')();
var express        = require('express');
var http           = require('http').Server(app);
var http           = require('http');
var path           = require('path');

var server         = http.createServer(app);

var port           = process.env.PORT || 3000;

var routes = require('./config/routes');
app.use("/api", routes);

// Set public directory
app.use(express.static('public'));

// Get static index page
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(port);
console.log('Server started on ' + port);
