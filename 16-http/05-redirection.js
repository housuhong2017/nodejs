#!/usr/bin/node

const http = require('http'),
      log = console.log,
      url = require('url');

const addr = 'http://sian.com/';


function getOption(addr){
  var options = url.parse(addr);

  return options;
}
function getURL(opt){
  
  http.get(opt,(res)=>{
    var newAddr = res.headers['location'];
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    log(res.headers);
    log('');
    if(res.statusCode > 300 && res.statusCode <400){
            getURL(newAddr);
    }else{
      res.pipe(process.stdout);
    }
  });
}

getURL(getOption(addr);
