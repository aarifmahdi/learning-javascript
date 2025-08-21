// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")
// console.log(mySym)
// console.log(typeof mySym)

const JsUser = {
    name: "babu rao",
    age: 67,
    [mySym]: "myKey1",
    location: "Haryana",
    isLoggedIn: false,
    children: ["nami rao babu rao", "shami rao babu rao", "kami rao babu rao", "hami rao babu rao"] 
}
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])
// // console.log(JsUser.children)
// // console.log(JsUser["age"])
// console.log(mySym)

// Object.freeze(JsUser)   // freeze JsUser means JsUser cannot be modified/changed now its freezed

// console.log(JsUser)

JsUser.greeting = function() {
    console.log(`hi my name is ${this.name}`)
}

// console.log(JsUser.greeting())
JsUser.greeting()