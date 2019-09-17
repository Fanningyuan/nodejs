#!/usr/bin/node


function area(radius){
    return Math.PI * radius *radius;
}
function circumfrence(radius){
    return Math.PI * 2 *radius;
}
function diree(radius){
    return 2 * radius;
}




console.dir(module);
module.exports.area = area;
