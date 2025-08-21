// const tinderUser = new Object()  // singleton object creation
const tinderUser = {}   // object literal

tinderUser.id = "123abc"
tinderUser.name = "Abhishek"
tinderUser.isLoggedIn = false
tinderUser.friends = ["sasha", "reshma", "dube"]

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "baba",
            lastname: "jamijanam"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b", }
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)  // Object.assign(target, source) ; changes are done in target!
// console.log("obj1:", obj1)
// console.log("obj3:", obj3)
// console.log(obj1 === obj3)

const obj3 = {...obj1, ...obj2} // mostly used
// console.log(obj3)

// users = [
//     {
//         email: "user1@gmail.com",
//         password: "hehe"
//     },
//     {
//         email: "another@gmail.com",
//         password: "kdlwkdow"
//     },
//     {
//         email: "xnsakxnsk@gmail.cim",
//         password: "nskcnkcw"
//     }
// ]

// console.log(users[0].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))    // hasOwnProperty()
// console.log(tinderUser.hasOwnProperty('isLogged'))

// for more experiments/knowledge/investigative-study, go to console and check out the methods there