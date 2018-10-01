// 流处理数据通过缓存可以提高性能
var fs=require("fs")
var myReadStream = fs.createReadStream('readme.txt','utf8')
myReadStream.setEncoding("utf8")
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')
var data = ''
myReadStream.on('data',function(chunk){
  myWriteStream.write(chunk)
})

myReadStream.on('end', function () {
  console.log(data)
})