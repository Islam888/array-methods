//Search for the "first" element of the array that passes the test implemented by callback function
//when it finds this first element, it stops and returns this element
//returns this first element that pass the test.
//if no element passes the test, or array is empty it returns undefined
//does not change (mutate) the original array

//Syntax:
const arr = [1, 2, 3]
let result = arr.find(function(element, index, array) {
    return element === 2 //or index === 2
})

console.log(result) //2

/////////////////////////////

result = arr.find(elem => elem === 5)
console.log(result) //undefined
