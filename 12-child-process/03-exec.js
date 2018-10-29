#!/usr/bin/node

const cp = require('child_process');

cp.exec('cat a.txt | sort |uniq',(err,out,error)=>{
  if(err){
    console.log(err.message);
    process.exit(100);
  }
  console.log(out);
})

//利用shell外壳调用子进程
