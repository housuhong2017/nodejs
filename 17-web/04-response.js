#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
    var html ='<!DOCTYPE html>'
            +'<html>'
            +'<head>'
            +'<meta charset="utf-8">'
            +'<title>hello</title>'
            +'</head>'
            +'<body>'
            +'<h1>Hello World</h1>'
            +'</body>'
            +'</html>';
  if(req.url === '/'){
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.writeHead(200,{
      'Content-Type':'text/html',
      'Content-Length':Buffer.byteLength(html)
    });
    res.end(html);
  }else{
    res.statusCode=404;
    res.setHeader('Content-Type','text/plain');
    res.end('Resource Not Found');
  }
}).listen(8080);
