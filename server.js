var http = require('http')
var handleRequest = function (request, response) {
  console.log('Get request on ' + Date())
  response.writeHead(200)
  response.end('Hello Node!')
}
var www = http.createServer(handleRequest)

www.listen(8080, function () {
  console.log('Listening on 8080')
})
