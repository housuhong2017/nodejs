#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      fs = require('fs'),
      qs = require('querystring'),
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
    res.end('html');
    showPage(req,res);
  }else if(req.url === '/' && req.method === 'POST'){
  var data='';
  req.on('data',(chunk)=>{data += chunk;});
  req.on('end',()=>{
    var list = qs.parse(data);

    if(list.item !=='')items.push(list.item);
    showPage(req,res);
  });
  }else{
    res.statusCode = 404;
    res.end('Error!');

   }
}).listen(8080);

function showPage(req,res){
  var html = fs.readFileSync('todo-list-template.html').toString('utf8');
  var content = items.map(function(item){return  '<li>' + item +'</li>';}).join('\n');
  html.replace('%',content);
  res.end(html);

}
