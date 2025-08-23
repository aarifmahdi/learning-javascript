// forin loop for objects

const myObject = {
    js: "javascript",
    cpp: "c++", 
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "python", "ruby"]

for (const key in programming) {
    console.log(programming[key]);    
}



// map is not iteratable

// const map = new Map()

// map.set('IN', 'India')
// map.set('USA', 'Unites States Of America')
// map.set('FR', 'France')
// map.set('IN', 'India')

// for (const key in map) {
//     console.log(key);
    
// }