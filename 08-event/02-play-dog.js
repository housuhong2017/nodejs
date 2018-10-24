#!/usr/bin/node

const EventEmitter =require('events').EventEmitter;

function Dog(name,energy){
  var _name=name;
  var _energy= energy;

  EventEmitter.call(this);

  var timer= global.setInterval(()=>{
    if(energy>0){
      emit('bark');
      _energy--;
    }
    else{
      global.clearInterval(timer);
    }
  },500)
}

Dog.prototype= EventEmitter.prototype;
