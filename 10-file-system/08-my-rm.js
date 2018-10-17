#!/usr/bin/node
//删除目录，但目录需要为空
const fs = require('fs');

var dir = process.argv[2];

fs.rmdirSync(dir);
