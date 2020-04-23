//adds one or more elements to the end of an array.
//returns the new length of the array (after addition)
//changes (mutates) the original array. 

//Syntax:
const arr = [1,2,3]
let newLength = arr.push(4)

console.log(arr) // [1,2,3,4]
console.log(newLength) // 4

//add more than one element
newLength = arr.push(10, 100, "any string")

console.log(arr) // [1,2,3,4,10,100,"any string"]
console.log(newLength) //7


