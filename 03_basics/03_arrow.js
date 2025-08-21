const user = {
    username: "Shamu gharan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // node environment
// in browser console, this value is windows!


// function chai() {
//     let username = "Hitesh"
//     console.log(this)
// }

// chai()
// `this` keyword is used for objects only
// `this` cannot be used for functions



// arrow function

// const chai = () => {
//     let username = "Hitesh"
//     console.log(this)
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  // implicit return ; one liner

// const addTwo = (num1, num2) => ( num1 + num2 )  // Do not use curly braces {}

// curly braces { } demands an explicit return statement unlike implicit return where round brackets () can be used
// console.log(addTwo(3, 5))

// return object with implicit return in arrow function

// () => {return smth}
// const hehe = () => ({name: "shamonama tajeswari"})    // this is implicit return ; where return statement is not used


const myArray = [1, 2, 4, 3]

// myArray.forEach(() => ())    // just for example