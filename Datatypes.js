// 2 types of data types in JavaScript
// 1. Primitive data types
// 2. Reference*(obeject) data types


// primitive data types are immutable,that does not mean that variables that holding these types cannot be reassigned, it means that the value itself cannot be changed.

// string, number, boolean, null, undefined, symbol, bigint

// Reference data types are mutable, meaning that the value can be changed even if the variable is declared with const.
// object, array, function

let str = 'hello'; // string
let num = 42; // number
let bool = true; // boolean
let n = null; // null
let und; // undefined
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool); // boolean
console.log(typeof n); // object (this is a known bug in JavaScript, null is actually a primitive type) 
console.log(typeof und); // undefined



