//Search for the first index of a given element in an array.
//return the index of this element, or -1 if it is not in the array
//if it found the element it stops and return its index
//does not change(mutate) the original array

//Syntax:
const arr = [1,2,3,2]
let result = arr.indexOf(2, 1/*start search from index 1, default 0.
    If it is a value which is equal to or greater thn array length it returns -1.
    If it is a negative value, explain*/)
console.log(result) //1
