//returns a new array of only elements (not indices, or arrays) which (or its indices, or arrays) pass the test
//from iterating on an array and calling a callback function on each element of the array
//only elements with which callback function return true (pass the test) are returned in the new array
//does not change (mutate) the original array (creates a new one).
//callback function has 3 parameters callback(element, index, arr)
//does not stop before iterating over the whole array
//chainable

//syntax:
const arr = [1, 2, 3];
arr.filter(function(element, index, array){
    return element < 3 //index < 1
})

// arrow function
const arr = [1, 2, 3];
const newArr = arr.filter(elem => elem < 3); // [1, 2]

//
let arr = [
    {name: "Islam", age: 30},
    {name: "Ahmed", age: 28},
    {name: "Ali", age: 33},
    {name: "Ahmed", age: 26}
]
arr.filter(elem => elem.name === "Ahmed") // [{name: "Ahmed", age: 28}, {name: "Ahmed", age: 26}]
arr.filter(elem => elem.age >= 30) // [{name: "Islam", age: 30}, {name: "Ali", age: 33}]


