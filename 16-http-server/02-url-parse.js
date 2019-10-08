#!/usr/bin/node

const http = require('http'),
      log = console.log,
      url = require('url'),
      qs = require('querystring');

http.createServer((req,res)=>{
  log('request URL:',req.url);
  //var addr = url.parse(req.url);
  var addr = url.parse('http://wangding:123@www.baidu.com:8080/a/b/c?age=20&gender=M#/d/e/f');

  log('path-name:',addr.pathname);
  log('query string:',addr.query);
  log('path parse:',addr.pathname.split('/'));
  log('qs parse:',qs.parse(addr.query));

  res.end('OK!');
}).listen(8080);
