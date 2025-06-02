function hello() {
  console.log('hello world');
}

hello()

let add=((a, b) => {
  return a + b
  
})
console.log(add(1,2));


function sayHello(name = 'world') {
  console.log('hello '+ name);
}
sayHello()

// anonymous function
let sum = function (a, b) {
console.log(a+b);
  
}
sum(2, 30)

// sum =>reference
// sum()=> function call(invocation)=return value

