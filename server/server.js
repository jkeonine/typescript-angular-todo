var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});
app.use('/static',  express.static(path.join(__dirname, '../public')));

var pkg = require('../package.json');
var env = process.argv.slice(2)[0];
var PORT = pkg.ports[env];
if(!PORT)
    PORT = process.env.PORT || pkg.ports.dev;

app.listen(PORT);
console.log('App running on localhost:' + PORT);