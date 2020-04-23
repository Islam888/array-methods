//returns a new array of elements, indices, arrays after calling the function on     them
//from iterating on an array and calling a callback function on each element of the array
//does not change (mutate) the original array (creates a new one).
//callback function has 3 parameters callback(element, index, arr)
//does not stop before iterating over the whole array
//chainable

//syntax:
let arr = [1, 2, 3];
let newArr = arr.map(function(element, index, array){
    return element //index //array
}) 

console.log(newArr)

newArr = arr.map(function(elem){
    return elem * 2
}); // [2, 4, 6]

console.log(newArr)

//with arrow function 
newArr = arr.map(elem => elem * 2);// [2, 4, 6]
console.log(newArr)
//
arr = [
    {name: "Islam", age: 30},
    {name: "Ahmed", age: 28},
    {name: "Ali", age: 33},
    {name: "Ahmed", age: 26}
]

newArr = arr.map(elem => elem.name)
console.log(newArr) // ["Islam", "Ahmed", "Ali"]
newArr = arr.map(elem => elem.age) 
console.log(newArr) // [30, 28, 3
console.log(newArr)