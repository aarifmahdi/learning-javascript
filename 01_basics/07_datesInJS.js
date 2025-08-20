// Dates

let myDate = new Date()

// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())    // US standard
// console.log(myDate.toLocaleDateString('en-IN')) // Indian standard --- same as Pakistan
// console.log(myDate.toLocaleString())

// Date is a date type object in js
// let myNewDate = new Date(2025, 0, 4)

// // console.group(typeof myNewDate)
// console.group(myNewDate.toDateString())

// myNewDate = new Date(2025, 7, 5)
// console.log(myNewDate.toDateString())

// let formatDate = new Date(2025, 0 , 8, 5, 3) 
// console.log(formatDate.toLocaleString())

// let anotherDateFormat = new Date("2025-01-04")    // "yyyy-mm-dd"
// let anotherDateFormat2 = new Date("04-01-2025")   // "dd-mm-yyyy"
// console.log(anotherDateFormat2.toLocaleString())

let myTimeStamp = Date.now()    // OR new Date()
let myBirthDayTimeStamp = new Date(2005, 7, 5)
// console.log(myBirthDayTimeStamp.getTime())
let myAge = myTimeStamp - myBirthDayTimeStamp
// console.log(myAge)  // in ms
// console.log(((myAge / 1000) / 86400) / 365) // divide by 1000 gives ms in seconds --- divide by 86400 gives sec in days --- and finally days / 365 gives you years
// console.log(Math.floor(((myAge / 1000) / 86400) / 365)) // gives the age of this person who born on 2025-08-05

// console.log(myBirthDayTimeStamp.getDate())
// console.log(myBirthDayTimeStamp.getDay())
// console.log(myBirthDayTimeStamp.getFullYear())
// console.log(myBirthDayTimeStamp.getMonth() + 1) // returns 0-11 months

let newDate = new Date()

// customization in date time
// press ctrl+space for options
newDate.toLocaleDateString('default', {
    weekday: "long"
})
// for more options and all, visit MDN 