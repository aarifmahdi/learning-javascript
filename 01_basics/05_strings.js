let herName = "can't say mittr"
let myName = 'its shareek-e-jurm'

// another way of defining a string using new keyword and String() METHOD

let randomName = new String("it is a random name string")   // but this a string object

// console.log(typeof herName)
// console.log(typeof myName)
// console.log(typeof randomName)

// console.log(herName[0])
// console.log(herName[11])

// console.log(randomName[0])

// console.log(herName.length)
// console.log(randomName.length)

let gameName = new String('cricket 2007')

// console.log(gameName.length)

// console.log(gameName.__proto__)
// console.log(gameName.match("2"))
// console.log(gameName.match("3"))

// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,5)
// console.log(newString)

const anotherString = gameName.slice(-7, 10)
// console.log(anotherString)
// slice() handles -ve indexing , substring doesn't
// slice don't allow start index to be greater than last, substring does (by treating first as last and otherwise)

let nashebOFarazInMyLife = "        hehe     "

// console.log(nashebOFarazInMyLife.trim())
// console.log(nashebOFarazInMyLife.trimEnd())

let url = "www.whatismyipaddress.com/home%20network"
const usableUrl = url.replace("%20", "-")
// console.log(usableUrl)

// console.log(url.includes("ipaddress"))
// console.log(url.includes("ipv4"))

console.log(url.split("."))