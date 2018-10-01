console.log('hello world');

var time = 0
var timer = setInterval(function(){
  time += 2;
  console.log(time + 's')
  if (time > 6) {
    clearInterval(timer)
    console.log('clearInterval')
  }
},2000)
// 输出当前目录 和 带绝对路径的文件名
console.log(__dirname); 
// console.log(filename);
console.dir(global)