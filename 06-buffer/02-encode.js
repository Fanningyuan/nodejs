#!/usr/bin/node

const log = console.log;
      usr = process.argv[2];
      pwd = process.argv[3];

log('usr:%s,pwd:%s',usr,pwd);

var buf = new Buffer(usr + ':' + pwd);
log('base64:',buf.toString('base64'));
