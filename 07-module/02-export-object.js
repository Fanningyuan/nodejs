#!/usr/bin/node


var circle = {
  /**
   *计算圆的面积 
   *
   * @param radius
   * @returns {undefined}
   */
  'area':function(radius){
    return Math.PI * radius *radius;
  },
  'circumference':function(radius){
    return Math.PI * 2 *radius;
  },
  'diameter':function(radius){
    return 2 * radius;
  }
};

console.dir(module);
module.exports = circle;
