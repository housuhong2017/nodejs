#!/usr/bin/node

const http = require('http'),
      qs = require('querystring');

var items = [];

http.createServer((req, res) => {
    console.log('HTTP request method:', req.method);

    switch(req.method) {
      case 'GET':
        select(req, res);
        break;

      case 'POST':
        create(req, res);
         break;

      case 'PUT':
         update(req, res);
         break;

      case 'DELETE':
         remove(req, res);
         break;

      default:
      res.end('Error!');
                                                                    
    }

}).listen(8080);

function select(req, res) {
    var msg = JSON.stringify(items);
    console.log(msg);
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.setHeader('Content-Length',Buffer.byteLength(msg));
    res.end(msg);

}

function remove(req, res) {
  if(req.url===''){
    items = [];
  }else{
    var id = qs.parse(url.parse(req.url).query).id;
    console.log('ID:',id);
    if(id >= 0 && id<items.length){
      items.splice(id,1);
      res.end('OK!');
    }else{
      res.end('Error!');
    }
  }
  res.end(res.method);

}

function send(res) {
    var data = '';
    req.on('data',(chunk)=>{data += chunk;});
    req.on('end',()=>{
      var item = qs.parse(data).item;
      if(item !='' )items.push(item);
    });
    res.end('OK!');

}

function update(req,res){
  res.end(req.method);
}
