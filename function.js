function hello() {
  console.log('hello world');
}

hello()

let add = ((a, b) => {
  return a + b

})
console.log(add(1, 2));


function sayHello(name = 'world') {
  console.log('hello ' + name);
}
sayHello()

// anonymous function
let sum = function (a, b) {
  console.log(a + b);

}
sum(2, 30)

// sum =>reference
// sum()=> function call(invocation)=return value

// 4 types if function
// 1.has parameters has return
// 2.has parameters no return
// 2.no parameters has return
// 3.no parameters no return

function fizzbuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(10)

function calculateInterest(principle, interest, year) {
  let int = interest / 100;
  return principle * int * year;


}
let res = calculateInterest(500000, 10, 2)
console.log(res);

