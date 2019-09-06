#!/usr/bin/node


const log = console.log;

var wd = {
  'name':'wangding',
  'QQ':'12323324',
  'age':43
};

log('Name: %s\t Age: %d',wd.name,wd.age);
log('Wangding Info:',wd);

log('Name:',wd.name);
log(`Age is ${wd.age}`);

var nn = '范宁远';

log(`Name is ${nn}`);

console.error('something wrong!');
