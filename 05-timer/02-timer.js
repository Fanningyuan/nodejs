#!/usr/bin/node

console.log('start...');

const timeID = setInterval(loop,500);

function loop(){
  console.log('I will loop forever!');
}
timeID.unref();
setTimeout(()=>{
  console.log('Game Over!');
},5000);
