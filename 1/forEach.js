//does not create a new array (return undefined)
//iterate on an array and call a callback function on each element
//does not change (mutate) the original array
//callback function has 3 parameters callback(element, index, arr)
//does not stop before iterating over the whole array
//Not chainable
//syntax:
arr.forEach(function(element, index, array){
    console.log(element)
})

//
const arr = [1, 2, 3];
let newArr = []
arr.forEach(function(elem){
    if (elem < 3) {
        newArr.push(elem)
    }
}); 
console.log(newArr) //make the same with filter

//
const arr = [
    {name: "Islam", age: 30},
    {name: "Ahmed", age: 28},
    {name: "Ali", age: 33},
    {name: "Ahmed", age: 26}
]

let newArr = []
arr.forEach(elem => {
    if (elem.name === "Ahmed") {
        newArr.push(elem)
    }
}) //same with filter
console.log(newArr)
//
let newArr = []
arr.forEach(elem => { 
    if (elem.age >= 30) {
        newArr.push(elem)
    }
})//same with filter
console.log(newArr)