#!/usr/bin/node

process.on('SIGINT',()=>{
  console.log('you process crtl+C or kill -2');
  process.exit();
});

process.on('SIGTSTP',()=>{
  console.log('you press crtl+z');
});

process.stdin.resume();
