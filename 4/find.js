//Search for the "first" element of the array that passes the test implemented by callback function
//when it finds this first element, it stops and returns this element
//returns this first element that pass the test.
//if no element passes the test, or array is empty it returns undefined
//does not change (mutate) the original array

//Syntax:
let arr = [1, 2, 3, 4]
let result = arr.find(function(element, index, array) {
    return element > 2 
})

console.log(result) //3

/////////////////////////////

result = arr.find(elem => elem === 5)
console.log(result) //undefined

result = arr.find(elem => elem < 4 && elem > 1)
console.log(result) //2
