//Search for the "first" element of the array that passes the test implemented by callback function
//when it finds this first element, it stops and returns its index.
//returns the index of the first element that passes the test.
//if no element passes the test, or array is empty, it returns -1
//does not change (mutate) the original array

//Syntax:
const arr = [1, 2, 3]
let result = arr.findIndex(function(element, index, array) {
    return element === 2
})

console.log(result) //1

/////////////////////////////

result = arr.findIndex(elem => elem === 5)
console.log(result) //-1