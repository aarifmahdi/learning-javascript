// Immediately Invoked Function Expressions (IIFE)

// ()()    // first () means function definiton , next () means execution

// why IIFE?
// Ans: to immediately invoke the function + to avoid the global variable pollution!

// (() => (console.log(5)))();  // example of arrow IIFE function

// // 💡 IIFE r=requires a semi colon ; to end its execution

// named IIFE
// (function chai() {
//     console.log(7)
// })();

// passing argument to unnamed arrow IIFE
// ((name) => {
//     console.log(`${name}`)
// })("Tamasha")