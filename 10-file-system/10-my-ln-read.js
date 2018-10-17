#!/usr/bin/node
//打印链接
const fs = require('fs');

var lnk = process.argv[2];

console.log(fs.readlinkSync(lnk));
