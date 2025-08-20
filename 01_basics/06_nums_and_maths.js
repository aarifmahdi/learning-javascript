const score = 100

// another way of defining a number
const balance = new Number(100.899)

// console.log(`score: ${score}`)
// console.log(`balance: ${balance}`)

// console.log(score)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed(1))

// console.log(balance.toPrecision(2))

const million = 10000000

// console.log(million.toLocaleString()) // US standards
// console.log(million.toLocaleString('en-IN'))    // indian standards

// +++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(3.99))
// console.log(Math.sqrt(25))
// console.log(Math.min(4,3,2,67,7))
// console.log(Math.max(4,3,2,67,7))

// console.log(Math.random())  // this is waht we used most in maths 

// Math.random() gives 0-1 range

// console.log(Math.floor(Math.random() * 10)) // gives 0-9 range

// console.log(Math)

// max - min + 1
// 20 - 10 + 1 = 11 ; so minimim multiplied by 11 gives
const min = 10
const max = 20
// we want range 10-20 integers
console.log(Math.floor(Math.random() * (max - min + 1)) + min)