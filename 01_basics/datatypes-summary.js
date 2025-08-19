// primitive data types (non reference)

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

// null is an object data type btw

// reference type (non primitive data type)

// they are Arrays, Objects, Functions

// acc to hitesh (chai aur code), learning objects and js web events is learning js!

// javascript is a dynamically typed language like python
// it means data types are checked on run time

// static typed languages check data types (type of variable) is checked during compile like C/C++, Java, C#, etc

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId)

// const bigNumber = 276738648732648732643294983263284n

// console.log(typeof bigNumber)

const BKLs = ["haddi", "gishman", "ahsan", "hasnain", "sibtain"]

// anything insode curly braces { } is object
let myObj = {
    name: "sooraj mukhi",
    age: 24
}
// it can have any data type inside; string, number, boolean, another object, function, etc

const myFunction = function() {
    console.log("hello world");
}

// myFunction();

// console.log(typeof bigNumber)

console.log(typeof myFunction)

console.log(typeof myObj)

console.log(typeof BKLs)

// all non primitive data types are of object type
// function returns function type that is function object data type
// see ecmascript documentation for better understanding

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory in js
// Stack (primitve data yypes) and Stack (non primitve or reference data types)
// primitive data types give copy
// reference types give pointer/arrow to same data ; so changes in one applies to all

let countryName = "Pakistan"

let anotherCountryName = countryName

anotherCountryName = "Bangladesh"

console.log(countryName)    // countryName remains same ; 
console.log(anotherCountryName)

let details = {
    name: "Nadaan",
    age: 20,
}

let anotherDetails = details

anotherDetails.name = "hoshyaar"

console.log(details.name)   // changed ; but you didn't do it using the details object but another arrow/pointer anotherDetails to the same data
