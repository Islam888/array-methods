//removes the last element of an array.
//returns the removed element.
//changes (mutates) the original array.
//in case of empty array, it returns undefined.

//Syntax:
const arr = [1,2,3]

let removedElem = arr.pop() 
console.log(arr) //[1,2]
console.log(removedElem) //3

////////////////////////////
//Empty array
removedElem = arr.pop()
console.log(arr) //[1]
console.log(removedElem) //2

removedElem = arr.pop()
console.log(arr) //[]
console.log(removedElem) //1

removedElem = arr.pop()
console.log(arr) //[]
console.log(removedElem) //undefined

