const http = require('http')

const server = http.createServer((request, response) => {
  url = request.url
  response.writeHead(200, { 'COntent-Type': 'text/plain' })

  console.log('my url:' + request.url)
  response.end('my url:' + url)
})

server.listen(3000)

console.log('this is my first node.js server')
