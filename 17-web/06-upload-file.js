#!/usr/bin/node

const http = require('http'),
      fs = require('fs'),
      log = console.log;

http.createServer((req,res)=>{
    log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    log(req.headers);
    log('');
    //if(req.url ==='/' && req.method === 'GET')
  
  if(req.url === '/' && req.method === 'POST'){
    var data = '';
    req.setEncoding('binary');
    req.on('data',(chunk)={
      date += chunk;
    });
    req.on('end',()=>{
      log(data);
      var das = data.split('\r\n');
      var fileName = das[1].split(';')[2].split('=')[1];
      fileName = fileName.slice(1,fileName.length - 1);
      log('file name:', fileName);
      var fileData = das[4];
      log(fileData);
    });
    req.pipe(process.stdout);
    res.end('OK!');

  }else{
    res.statusCode = 404;
    res.end('Error!');
  }
}).listen(8000);
 
function show(req,res,page){
  //res.statusCode = (page)
  res.statusCode = 404;
  res.setHeader('Content-Length', page.length);
  res.setHeader('Content-Type', 'text/html');
  
  res.end(page);
}

const backPage=''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title>Back</title>'
  + '</head>'
  + '<body>'
  + '<h1>OK! Upload Success</h1>'
  + '<a href="/">Continue to Upload File</a>'
  + '</body>'
  + '</html>';

const uploadPage=''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title></title>'
  + '</head>'
  + '<body>'
  + '<h1> upload File</h1>'
  + '<form action="/upload" method="POST" enctype="multipart/form-data">'
    + '<input type="file" name="filename">'
    + '<input type="submit" value="Upload">'
  + '</body>'
  + '</html>';
  const errPage=''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title> Error</title>'
  + '</head>'
  + '<body>'
    + '<h1>Something Wrong!</h1>'
    + '<a href="/" >Continue to Upload File</a>'
  + '</body>'
  + '</html>';
