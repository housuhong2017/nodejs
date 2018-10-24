#!/usr/bin/node

const cp = require('child_process');

var cmd = process.argv[2],
    arg=[];

for(var i=0;i<process.argv.length;i++) arg.push(process.argv[i]);


cp.execFile('cat',['01-exec-file.js'],(err,out,error)=>{
  if(err){
    console.error(error);
    process.exit(100);

  }
  console.log(out);
});
