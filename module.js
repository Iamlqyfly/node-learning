/**
 * 
 * module 对象
  每个文件都被视为独立的模块
  每个模块中，module 指向表示当前模块的对象的引用
  module 实际上不是全局的，而是每个模块本地的
  module.exports 导出模块内的对象，方便其他对象引用
  require() 引入模块
  当 Node.js 直接运行一个文件时，require.main 会被设为它的 module
  可以通过 require.main === module 来判断一个文件是否被直接运行
  module 提供了一个 filename 属性（通常等同于 __filename）
  可以通过检查 require.main.filename 来获取当前应用程序的入口点
 */

var counter = function (arr) {
  return "There are " + arr.length + " elements in array"
}

var adder = function (a, b) {
  return `the sum of the 2 numbers is ${a+b}`
}

var pi = 3.1415

// 只有一个时可以这样导入  module.exports = counter

// 多个
/* 
module.exports.counter = counter
module.exports.adder = adder
module.exports.pi = pi
*/

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
}
/* 对象可以简写
module.exports = {
  counter,
  adder,
  pi,
}
*/