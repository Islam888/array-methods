//adds one or more elements to the begining of an array.
//returns the new length of the array (after addition)
//changes (mutates) the original array. 

//Syntax:
let arr = [1,2,3]
let newLength = arr.unshift(4)

console.log(arr) // [4,1,2,3]
console.log(newLength) // 4

//add more than one element
newLength = arr.unshift(10, 100, "any string")

console.log(arr) // [10,100,"any string",4,1,2,3]
console.log(newLength) //7  