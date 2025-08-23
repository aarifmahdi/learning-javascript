// forof loop used for arrays

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// Maps

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'Unites States Of America')
map.set('FR', 'France')
map.set('IN', 'India')
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}

// objects are not iterable through forof loop
// maps are iterable using forof loop

// const myObj = {
//     game1: "NFS",
//     game2: "Spiderman"
// }

// for (const [key, value]] of myObj) {
//     console.log(key, value);
    
// }