var http = require('http')
var url = 'https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment'
http.get(url, function(res) {
  var html = ''
  res.on('data', function(data){
    html += data
  })
  res.on('end',function(){
    console.log(html)
  })
}).on('error', function(){
  console.log('获取课程数据出错')
})