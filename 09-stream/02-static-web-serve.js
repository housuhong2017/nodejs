#!/usr/bin/node

var file;

const http =require('http'),
      path = require('path'),
      fs = require('fs');
//req 请求对象 res 响应对象
http.createServer((req,res)=>{
  //console.log(req.headers);
  console.log(req.url);
  file = path.join(__dirname,req.url);
  //fs.readFileSync(file).toString('utf8');

  //try{
   // res.end(fs.readFileSync(file).toString('utf8'))；
  //}catch(err){
   // res.end(err.message);
  //}
  fs.createReadStream(file).pipe(res);
}).listen(8080);

//增量开发req协议请求，res响应
