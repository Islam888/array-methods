//tests if at least one element of an array passes the test implemented by the callback function
//if it finds that element, it stops and returns true
//returns true, or false
//returns false in case of empty array.
//does not change (mutate) the original array.

//Syntax:
const arr = [1, 2, 3]

let result = arr.some(function(element, index, array) {
    return element === 2 //or index !== 0
})

console.log(result) //true

result = arr.some(elem => elem < 1)

console.log(result) //false

const arr = [
    {name: "Islam", age: 30},
    {name: "Ahmed", age: 28},
    {name: "Ali", age: 33},
    {name: "Ahmed", age: 26}
]

let result = arr.some(elem => elem.age > 30)
console.log(result) //true