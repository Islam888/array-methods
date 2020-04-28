//tests if "all" elements of an array pass the test implemented by the callback function
//returns true, or false
//if one element does not pass the test it stops and returns false
//returns true in case of empty array.
//does not change (mutate) the original array.

//Syntax:
let arr = [1, 2, 3]

let result = arr.every(function(element, index, array) {
    return element < 4 
})

console.log(result) //true

result = arr.every(elem => elem < 3)

console.log(result) //false

arr = [
    {name: "Islam", age: 30},
    {name: "Ahmed", age: 28},
    {name: "Ali", age: 33},
    {name: "Ahmed", age: 26}
]

result = arr.every(elem => elem.age < 30)
console.log(result) //false