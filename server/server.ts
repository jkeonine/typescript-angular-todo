/// <reference path="../typings/main.d.ts" />

import * as express from 'express';
import * as path from 'path';

var pkg = require('../package.json');
var env = process.argv.slice(2)[0];
var PORT = pkg.ports[env];
if(!PORT) {
    PORT = process.env.PORT || pkg.ports.dev;
}

express()
    .get('/', function(req: any, res: any) {
        res.sendFile(path.join(__dirname, '../index.html'));
    })
    .use('/static',  
        express.static(path.join(__dirname, '../public'))
    )
    .listen(PORT);
    
console.log('App running on localhost:' + PORT);