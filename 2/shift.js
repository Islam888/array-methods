//removes the first element of an array.
//returns the removed element.
//changes (mutates) the original array.
//in case of empty array, it returns undefined.

//Syntax:
let arr = [1,2,3]

let removedElem = arr.shift() 
console.log(arr) //[2,3]
console.log(removedElem) //1

////////////////////////////
//Empty array

removedElem = arr.shift()
console.log(arr) //[3]
console.log(removedElem) //2

removedElem = arr.shift()
console.log(arr) //[]
console.log(removedElem) //3

removedElem = arr.shift()
console.log(arr) //[]
console.log(removedElem) //undefined