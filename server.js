/*var PORT = 500;
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  //For LiveReload
  res.write("<script src=\"http://"+req.headers.host.split(":")[0]+":35729/livereload.js\"></script>");

  res.end('Hello World\n');
}).listen(PORT);
console.log('Server running at localhost:' + PORT);
*/
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));
app.use('/node_modules',  express.static( path.join(__dirname, '/node_modules')));
app.use('/js',  express.static( path.join(__dirname, '/js')));

var pkg = require('./package.json');
var env = process.argv.slice(2)[0];
var PORT = pkg.ports[env];
if(!PORT)
    PORT = process.env.PORT || pkg.ports.dev;

app.listen(PORT);
console.log('App running on localhost:' + PORT);