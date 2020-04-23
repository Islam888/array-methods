//returns a new array of elements, indices, arrays after calling the function on     them
//from iterating on an array and calling a callback function on each element of the array
//does not change (mutate) the original array (creates a new one).
//callback function has 3 parameters callback(element, index, arr)
//does not stop before iterating over the whole array
//chainable

//syntax:
const arr = [1, 2, 3];
const newArr = arr.map(function(element, index, array){
    return element //index //array
}) 

console.log(newArr)

const arr = [1, 2, 3];
const newArr = arr.map(function(elem){
    return elem * 2
}); // [2, 4, 6]







//with arrow function 
/* const arr = [1, 2, 3];
const newArr = arr.map(elem => elem * 2);// [2, 4, 6] */

//
/* const arr = [
    {name: "Islam", age: 30},
    {name: "Ahmed", age: 28},
    {name: "Ali", age: 33},
    {name: "Ahmed", age: 26}
]
arr.map(elem => elem.name) // ["Islam", "Ahmed", "Ali"]
arr.map(elem => elem.age) // [30, 28, 33] */

