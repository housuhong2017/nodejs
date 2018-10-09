#!/usr/bin/usr

const Dog =require('./02-play-dog.js');

var taidi =new Dog('taidi',5);
var zangao = new Dog('zangao',10);

taidi.on('bark',onBark);
zangao.on('bark',onBark);

function onBark(){
  console.log('')
}
