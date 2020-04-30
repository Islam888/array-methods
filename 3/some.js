//tests if at least one element of an array passes the test implemented by the callback function
//if it finds that element, it stops and returns true
//returns true, or false
//returns false in case of empty array.
//does not change (mutate) the original array.

//Syntax:
let arr = [1, 2, 3]

let result = arr.some(function(element, index, array) {
    return element === 2
})

console.log(result) //true

result = arr.some(elem => elem < 1)

console.log(result) //false

let todos = [
    {todo: "clean room", done: true},
    {todo: "finish task", done: true},
    {todo: "send email", done: false}
]

result = arr.some(todo => todo.done === false)
console.log(result) //true

arr = []
result = arr.some(elem => elem === true) 
console.log(result) //false