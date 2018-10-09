#!/usr/bin/node

//标准输入输出流

const stdin =process.stdin;
process.stdin.resume();
process.stdin.setEncoding('utf8');

stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase());
});
global.setTimeout(()=>{
  stdin.removeAllListeners();
},3000)
stdin.on('end',()=>{
  process.exit();
});
