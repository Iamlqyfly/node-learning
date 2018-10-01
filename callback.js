function sayHi(){
  console.log('hi')
}
sayHi()

// 将匿名函数赋给变量
var sayBye = function (name) {
  console.log(name + ' Bye')
}

sayBye()

function callFunction(fun,name){
  fun(name)
}

// callFunction(sayBye, 'able') 
callFunction(function(name){
  console.log(name + 'Bye')
}, 'able')