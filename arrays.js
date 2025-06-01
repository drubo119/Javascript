const car = ["Toyota", "Honda", "Ford"];
const car2 = new Array("Toyota", "Honda", "Ford", "Chevrolet");

console.log(car2);
console.log(car[1]);

// if use const  then we can change the value of the array,for an element or many not the entire array
// For let we can change the entire array

let car3 = ["Toyota", "Honda", "Ford"];
car3 = ["Chevrolet", "Nissan", "Mazda"]; // this is allowed
console.log(car3);

console.log(car3.length); // length of the array

car3.push("BMW"); // add an element to the end of the array
console.log(car3);
car3.pop(); // remove the last element of the array
console.log(car3);



// add element to the beginning of the array
car3.unshift("Audi"); // shift for elimination element at the beginning of the array
console.log(car3);

// array methods
// concat
const car4 = car3.concat(car2);
console.log(car4);

let car5 = [...car4, ...car3]; // spread operator to combine arrays
console.log(car5);
