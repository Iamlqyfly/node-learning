/**
 * 多数 Node.js 核心 API 都采用异步事件驱动架构
 * 所有能触发事件的对象都是 EventEmitter 类的实例
 * 事件名称通常是驼峰式的字符串
 */

 var events = require('events')
 var util = require('util')

 var myEmitter = new events.EventEmitter()
// 绑定 事件名称 和 回调函数
 myEmitter.on('someEvent', function(msg){
  console.log(msg)
 })
// 手动触发
 myEmitter.emit('someEvent','the event was emitted')

  
var Person = function(name) {
  this.name = name
}
// 继承，让Person类具有事件对象的特性，绑定和触发事件
util.inherits(Person,events.EventEmitter)
// 新建对象
var xiaoming = new Person('xiaoming')
var li = new Person('li')
var person = [xiaoming,li]
person.forEach(function(person){
  person.on('speak',function(msg){
    console.log(person.name + 'said:'+ msg)
  })
})

xiaoming.emit('speak','hi')
li.emit('speak','hi lili')


