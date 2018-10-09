#!/usr/bin/node

//可读推送流

const Readable = require('stream').Readable;//类

var src = new Readable();//实例化

var c =97;

src._read= function(){
  src.push(String.fromCharCode(c++));
  if(c > 'z'.charCodeAt(0)) src.push(null);
}

src.pipe(process.stdout);


