// JavaScript is the programming language of the web.
// Official name: ECMAScript

// 1.HTML to define the content of web pages

// 2. CSS to specify the layout of web pages

// 3. JavaScript to program the behavior of web pages

// Node js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
// It allows developers to use JavaScript to write server-side code.

// Variables

let x = 'hello' // let is used to declare a variable that can be reassigned (let is keyword in JavaScript ,x is identifier, 'hello' is a string literal or value)

const y = 'world' // const is used to declare a variable that cannot be reassigned (const is keyword in JavaScript ,y is identifier, 'world' is a string literal or value)

var z = 'hello' // var is an older way to declare variables, but it is not recommended (var is keyword in JavaScript ,z is identifier, 'hello' is a string literal or value)

let lastName = 'Shihab' //initiate
lastName = 'Dhrubo' // lastName is a variable that can be reassigned (assignment) these value will show in console.log(lastName) as Dhrubo


let firstName = 'Shihab' //initiate
let firstName = 'Dhrubo' // this will throw an error because firstName is already declared with let, you cannot redeclare a variable with let in the same scope ,these can fix by using  var

console.log(firstName);

// var=function scope, let and const=block scope

// const can not be reassigned(immutable) , but it can be mutated if it is an object or array