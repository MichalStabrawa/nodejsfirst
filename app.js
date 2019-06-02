const { sum, min } = require('./hellpers')
const test = require('./test')

const http = require('http')

const server = http.createServer((req, res) => {
  res.end('hello world from node js')
})

server.listen(3000)

// console.log('PROCESS', process)
const total = sum(10, 200)
const totalmin = min(200, 10)
const totaltest = test.test(10, 200)

console.log('Total' + total)
console.log('Min test: ' + totalmin)
console.log('Test node module ' + totaltest)
