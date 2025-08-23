// filter

// const myNums = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// const resultOfFilter = myNums.filter( (item) => (item > 8) )
// console.log(resultOfFilter);


// map

// const newNumbrs = [1,2,3,4,5,6,7,8,9,10]

// const result = newNumbrs.map( (item) => (item + 10) )
// console.log(result);


// foreach
const numbersTillFive = [0,1,2,3,4,5]

const resultOfNumbersTillFive = []
numbersTillFive.forEach( (item) => {
    if(item > 3){
        resultOfNumbersTillFive.push(item)
    }
} )
// console.log(resultOfNumbersTillFive);

const anotherResultOfNumbersTillFive = []
numbersTillFive.forEach( (item) => {
    const sum = item + 10
    anotherResultOfNumbersTillFive.push(sum)
} )
// console.log(anotherResultOfNumbersTillFive);



// chaining
const drunkNumbers = [3, 1, 7, 4, 9, 0]

const resultOfDrunkNumbers = drunkNumbers
                            .map( (item) => (item * 3) )
                            .map( (item) => (item + 1000) )
                            .filter( (item) => (item >= 1009) )

console.log(resultOfDrunkNumbers);
