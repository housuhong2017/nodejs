#!/usr/bin/node

//打印文件夹目录，以数组形式
const fs= require('fs');

var dir = process.argv[2];

console.log(fs.readdirSync(dir));

