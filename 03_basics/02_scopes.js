// global scope ; everywhere

// block scope ; inside curly braces {}
// like if block, for loop block etc

// let herFavoriteCar = "Porsche"

// if (true) {
//     herFavoriteCar = "Ferrari"
// }

// console.log(herFavoriteCar)


console.log(addOne(5))  // this runs properly ; function is defined without variable

function addOne(num) {
    return num + 1
}


console.log(addTwo(5))  // gives error ; the concept is called hoisting ; function is defined using variable

const addTwo = function(num) {
    return num + 2
}

// hoisting --- if function is defined under a variable it cannot be called before that
// otherwise if function is defined wihtout variable it can be used anywhere (even before that i.e. above that in code)
