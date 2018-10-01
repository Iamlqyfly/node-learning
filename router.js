var http = require('http')
var fs = require('fs')

function startServer() {
  var onRequest = function(req, res){
    console.log('request received' + 'req.url')
    if (req.url === '/' || req.url === '/home') {
      res.writeHead(200, {'Content-Type': 'text/html'})
      fs.createReadStream(__dirname + '/home.html','utf8').pipe(res)
    }else if (req.url === '/review') {
      res.writeHead(200,{'Content-Type':'text/html'})
      fs.createReadStream(__dirname+'/review.html','utf8').pipe(res)
    }else if(req.url === '/api/records'){
      res.writeHead(200,{'Content-Type':'application/json'})
      var jsonObj = {
        name: 'iamlqy'
      }
      res.end(JSON.stringify(jsonObj),1)
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res)
    }
  }
  var server = http.createServer(onRequest)
  server.listen(3000)
  console.log('server started on http://127.0.0.1:3000')
}



module.exports.startServer = startServer