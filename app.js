const hellpers = require('./hellpers')
const test = require('./test')

// console.log('PROCESS', process)
const total = hellpers.sum(10, 200)
const totaltest = test.test(10, 200)

console.log('Total' + total)
console.log('Test node module' + '' + totaltest)
