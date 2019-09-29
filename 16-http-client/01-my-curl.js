#!/usr/bin/node

const http = require('http'),
      addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';

      
      
http.get(addr,function(res){
  res.pipe(process.stdout);
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log(res.headers);
});
