// javascript operators for various operations,mathemetaical operations, logical operations, bitwise operations, and more

// types of operators
// Arithmetic Operators
const add = (a, b) => a + b; // Addition
const subtract = (a, b) => a - b; // Subtraction
const multiply = (a, b) => a * b; // Multiplication
const divide = (a, b) => a / b; // Division
const modulus = (a, b) => a % b; // Modulus
const exponent = (a, b) => a ** b; // Exponentiation
const increment = (a) => ++a; // Increment
const decrement = (a) => --a; // Decrement
console.log(divide(10, 2)); // Output: 5

//Type casting
// type coercion is the process of converting a value from one type to another
console.log(10 - '5'); // Output: 5 (string '5' is coerced to number)

console.log('10asd' - 5); // Output: NaN (string cannot be coerced to number)



// Assignment Operators

// == Assignment
const assign = (a, b) => a = b; // Assignment
const addAssign = (a, b) => a += b; // Add and assign
const subtractAssign = (a, b) => a -= b; // Subtract and assign
const multiplyAssign = (a, b) => a *= b; // Multiply and assign
const divideAssign = (a, b) => a /= b; // Divide and assign
const modulusAssign = (a, b) => a %= b; // Modulus and assign
const exponentAssign = (a, b) => a **= b; // Exponentiation and assign
console.log(assign(5, 10)); // Output: 10

// Comparison Operators
const isEqual = (a, b) => a == b; // Equal to
const isStrictEqual = (a, b) => a === b; // Strictly equal to
const isNotEqual = (a, b) => a != b; // Not equal to
const isStrictNotEqual = (a, b) => a !== b; // Strictly not equal to
const isGreaterThan = (a, b) => a > b; // Greater than
const isLessThan = (a, b) => a < b; // Less than
const isGreaterThanOrEqual = (a, b) => a >= b; // Greater than or equal to
const isLessThanOrEqual = (a, b) => a <= b; // Less than or equal to
console.log(isEqual(5, '5')); // Output: true (type coercion)
console.log(isStrictEqual(5, '5')); // Output: false (no type coercion)

// Logical Operators
const and = (a, b) => a && b; // Logical AND
const or = (a, b) => a || b; // Logical OR
const not = (a) => !a; // Logical NOT
console.log(and(true, false)); // Output: false
console.log(or(true, false)); // Output: true


// Bitwise Operators
const bitwiseAnd = (a, b) => a & b; // Bitwise AND
const bitwiseOr = (a, b) => a | b; // Bitwise OR
const bitwiseXor = (a, b) => a ^ b; // Bitwise XOR
const bitwiseNot = (a) => ~a; // Bitwise NOT
const leftShift = (a, b) => a << b; // Left shift
const rightShift = (a, b) => a >> b; // Right shift
const unsignedRightShift = (a, b) => a >>> b; // Unsigned right shift
console.log(bitwiseAnd(5, 3)); // Output: 1 (0101 & 0011 = 0001)
console.log(bitwiseOr(5, 3)); // Output: 7 (0101 | 0011 = 0111)
console.log(bitwiseXor(5, 3)); // Output: 6 (0101 ^ 0011 = 0110)
console.log(bitwiseNot(5)); // Output: -6 (bitwise NOT of 0101 is 1010 in two's complement)
console.log(leftShift(5, 1)); // Output: 10 (0101 << 1 = 1010)
console.log(rightShift(5, 1)); // Output: 2 (0101 >> 1 = 0010)
console.log(unsignedRightShift(-5, 1)); // Output: 2147483645 (unsigned right shift of -5)

// Ternary Operator
const ternary = (condition, trueValue, falseValue) => condition ? trueValue : falseValue; // Ternary operator
console.log(ternary(5 > 3, 'Yes', 'No')); // Output: Yes


let msg = age >= 18 ? 'welcome' : 'sorry';


// typeof operator
let a = 'shihab';
console.log(typeof a); // Output: string


// instanceof operator
class Person { }
let person = new Person();
console.log(person instanceof Person); // Output: true