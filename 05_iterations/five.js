// foreach is commonly used with arrays

const coding = ["js", "ruby", "python", "c++"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)

// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
    
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
} )