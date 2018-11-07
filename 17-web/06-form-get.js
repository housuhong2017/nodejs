#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      log = console.log;

var items = [];
http.createServer((req,res)=>{
  if(url.parse(req.url).pathname === '/' && req.method === 'GET'){
    log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    log(req.headers);
    log('');
    log('query string:',url.parse(req.url).query);
    if(url.parse(req.url).query !==''){
      var data = url.parse(req.url).query;
      items.push(data.item);
    }
    req.pipe(process.stdout);
    var html = '<!DOCTYPE html>'
            +'<html>'
            +'<head>'
            +'<title>Todolist</title>'
            +'<meta charset="UTF-8"/>'
            +'</head>'
            +'<body>'
            +' <h1>TodoList</h1>'
            +'<ul>'
            +items.map(function(item){ return '<li>' + item +'</li>'; })
            +'</ul>'
            +'<form action="/" method="GET">'
            +'<input type="text" name="item" />'
            +'<input type="submit" value="Add Item"/>'
            +'</form>'
            +'</body>'
            +'</html>';
    res.end('html');

  }else if(req.url === '/' && req.method === 'POST'){

  }else{
    res.statusCode = 404;
    res.end('Error!');

  }).listen(8000);


