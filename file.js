var fs=require("fs")
var readMe = fs.readFileSync("readme.txt","utf8")

console.log(readMe)

// 异步读写文件
// 异步事件，Nodejs 维护一个事件队列，注册事件，完成后执行主线程
// 当主线程空闲时，取出执行事件，从线程池中发起线程执行事件， 当事件执行完成后通知主线程。这就是异步高效的原因。

var readMe = fs.readFile('readMe.txt', 'utf8', function (err, data) {
  fs.writeFile('writeMe.txt', data, function () {
      console.log('writeMe has finished')
  })
})

console.log('end')
// you read me
// end
// writeMe has finished


