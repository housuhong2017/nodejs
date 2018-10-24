#!/usr/bin/node

const http = require('http'),
      path = require('path'),
      fs = require('fs');

var file;
http.createServer((req,res)=>{
  file=path.join(__dirname,req.url);
  var read =fs.createReadStream(file);
  read.on('error',(err)=>{
    read.end(err.message);
    return;
  });
  read.pipe(res);
}).listen(8080);
