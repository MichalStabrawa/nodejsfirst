const { sum, min } = require('./hellpers')
const test = require('./test')

// console.log('PROCESS', process)
const total = sum(10, 200)
const totalmin = min(200, 10)
const totaltest = test.test(10, 200)

console.log('Total' + total)
console.log('Min test: ' + totalmin)
console.log('Test node module ' + totaltest)
