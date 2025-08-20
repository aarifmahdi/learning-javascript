// array

// shallow copy vs deep copy
// ; shallow copy means copying the reference to the object || wheras deep copy is the exact copy like in primtive data types
// array makes shallow copy i.e reference points are copied

let myArr = ['a', 'b', 'c', 'd', 'e']
let myArr2 = [0,1,2,3,4,5]
let myArr3 = ['haha', 'hehe', 404, 80, true, null, [1,2,3,]]
// console.log(myArr3)

let anotherArray = new Array(3,6,9,12)
// console.log(anotherArray)

let newArray = [0,1,2,3,4,5]
// newArray.pop()
// console.log(newArray)
// newArray.push(5)
// console.log(newArray)
// newArray.unshift(404)
// console.log(newArray)
// newArray.shift()
// console.log(newArray)
// console.log(newArray.includes(13))
// console.log(newArray.indexOf(13))   // -1 means not in the array
// console.log(newArray.indexOf(3))    // index 3 means 4th element

const newArray2 = newArray.join(' ')   // join() converts array into string like python's ','.join(array) 
// console.log(newArray2)  // default separator is comma ',' in join() javascript

// console.log("Original:", newArray)
// const n1 = newArray.slice(1,3)
// console.log("sliced:", n1)
// console.log("original after sliced:", newArray)
// const n2 = newArray.splice(1,3) // splice() has both start and end values inclusive
// console.log("spliced:", n2) // splice() modifies the array
// console.log("original after spliced:", newArray)

