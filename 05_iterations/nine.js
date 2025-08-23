const myNums = [1,2,3]

const myTotal = myNums.reduce( function (acc, currval) {
    // console.log(acc, currval);
    return acc + currval
}, 0 )
// console.log(myTotal);

const myTotal2 = myNums.reduce( (acc, currval) => (acc + currval), 0 )
// console.log(myTotal2);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 999
    },
    {
        itemName: "mobile app dev",
        price: 6999
    },
]

const totalCoursesPrice = shoppingCart.reduce( (acc, course) => (acc + course.price), 0 )
console.log(totalCoursesPrice);
