// loops
// for loop
// for(counter variable,condition,inc/dec)
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while loop
// while (condition) {
//     // code to be executed
// }

let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// nested loop
for (let k = 1; k <= 5; k++) {
  console.log(`Outer loop iteration: ${k}`);
  for (let l = 1; l <= 3; l++) {
    console.log(`  Inner loop iteration: ${l}`);
  }
}

// do-while loop
let m = 1;
do {
  console.log(m);
  m++;
} while (m <= 5);


// for of loop
const fruits = ["apple", "banana", "cherry"];
for (element of fruits) {
  console.log(element);
}

// foreach loop

let arr = [1, 2, 3, 4, 5];
arr.forEach(function (element, index) {
  console.log(`Element at index ${index} is ${element}`);
});