#!/usr/bin/node

const log =console.log;
log('process id:',process.pid);

process.stdin.resume();

process.on('SIGINT',()=>{
  log('your press strl-c, good bye');
  process.exit();
});

process.on('SIGTSTP',()=>{
  log('you press ctrl-z,stop running');
  process.exit();
});
