#!/usr/bin/node
/*
var pi =require('./02-export-var');

console.log('\npi:',pi);
console.log(module);


var circle =require('./02-export-function');

console.log(circle(20).diameter());
console.log(circle(20).circumference());
console.log(circle(20).area());
*/

var circle = require ('./02-export-object.js');
console.log('\ndiameter:\t',circle.diameter(10));

console.log('circumferece:\t',circle.circumference(10));
console.log('area:\t\t',circle.area(10));
