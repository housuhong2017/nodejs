#!/usr/bin/node

const fs = require('fs');
var  file = process.argv[2] || __filename;

var fid = fs.openSync(file);

console.log(fs.readFileSync(fid).toString('utf8'));

fs.writeSync(1,fs.readFileSync(fid).toString('utf8'));//1是标准输出流


//const fid = fs.openSync(file,'r');

//fs.writeSync(q,fs.readFileSync(fid).toString('utf8'));

fs.closeSync(fid);
