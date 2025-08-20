const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']
const fake_heros = ['xixao', 'mochin', 'tuxung', 'susangonatu']

// marvel_heros.push(dc_heros) // modifies existing array

// console.log(marvel_heros)
// console.log(marvel_heros[3][2])

const all_heros = marvel_heros.concat(dc_heros, fake_heros) // concat() returns a new array
// console.log(all_heros)

const anotherWayOfConcat = [...marvel_heros, ...dc_heros, ...fake_heros]
// console.log(anotherWayOfConcat)

const anotherArray = [1,2,3, [4,5,6], 7, [8,9, [10,11]]]
const realAnother = anotherArray.flat(Infinity)
// console.log(realAnother)

// console.log(Array.isArray("Hehe"))
// console.log(Array.from("Hehe"))
// // we must tell here whether to make arrays from the keys or values of object ; otherwise it can't make an array and returns an empty array
// console.log(Array.from({name: "Hiteshs"}))  // interesting

let score1 = 100
let score2 = 200
let score3 = 300

let arrayOfScores = Array.of(score1, score2, score3)
// console.log(arrayOfScores)

// explore more about array methods
// learn from MDN about from() of() isArray()