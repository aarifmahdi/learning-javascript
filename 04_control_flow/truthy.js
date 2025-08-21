// const userEmail = []    // empty array is considered true --- empty string is considered false

// if (userEmail) {
//     console.log("got user email")
// } else {
//     console.log("don't have user email")
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// others all values are truthy values
// "0", "false", " ", [], {}, function(){} - empty function is also truthy value

// if (!userEmail.length) {
//     console.log("array is empty")
// }

// or

// if (userEmail.length === 0) {
//     // array is empty
//     // or you can write condition: !userEmail.length
//     // !0 converts into not false which is true
// }

// console.log(!userEmail.length)

// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("empty object")
// }


// Nullish coalescing operator (??): null undefined
// agar null ya undefined value ajaye to usko cater krny ky lye alternate value dety hain, see below 👇

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15 // first non-null or non-undefined value is assigned
// this is used to handle unexpected returns ; null and undefined

// console.log(val1)


// Ternary operator

// condition ? true : false

// const iceTeaPrice = 100

// iceTeaPrice >= 80 ? console.log("80 or greater than 80") : console.log("less than 80")