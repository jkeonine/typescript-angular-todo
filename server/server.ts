/// <reference path="../typings/main.d.ts" />

import * as express from 'express';
import * as path from 'path';

const PORT = 500;

express()
    .get('/', function(req: any, res: any) {
        res.sendFile(path.join(__dirname, '../index.html'));
    })
    .use('/static',  
        express.static(path.join(__dirname, '../public'))
    )
    .listen(PORT);
    
console.log('App running on localhost:' + PORT);