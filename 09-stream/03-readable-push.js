#!/usr/bin/node

//可读推送流

const Readable = require('stream').Readable;//类

var src = new Readable();//实例化
src.push('hello');
src.push('world');
src.push(null);

src.pipe(process.stdout);


