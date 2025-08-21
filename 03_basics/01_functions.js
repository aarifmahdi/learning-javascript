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