function sayMyName() {
    console.log("M")
    console.log("E")
    console.log("O")
    console.log("W")
    console.log("W")
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // // console.log("hahahahaha")
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3,5)

// console.log(result)

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Shami gharam Vapte"))

function welcomeAnyOrphan(areYouOrphan) {
    if (!areYouOrphan) {
        console.log("Ja naa apna kaam kr!")
        return
    }
    console.log("Welcome to this anaat ashram ♥😚🤗")
}

// welcomeAnyOrphan(true)



function calculateCartPrice(val1, val2, ...num1) {
    console.log(num1)
}

// calculateCartPrice(200, 400, 200, 1000, 5000)

const user = {
    name: "pandey",
    price: 6000
}

function handleObjects(anyObject) {
    console.log(`${anyObject.name} is paying ${anyObject.price}`)
}

// handleObjects(user)
// handleObjects({
//     name: "Rekhna",
//     price: 250
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValueOfArray(anyArray) {
    return anyArray[1]
}

// console.log(returnSecondValueOfArray(myNewArray))
// console.log(returnSecondValueOfArray([1000, 4000, 45000, 3000]))