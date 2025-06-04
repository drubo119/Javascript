let person = {
  name: 'Shihab',
  addr: 'Dhaka',
  interest: ['Football', 'Cricket', 'Code'],
  sayHello: function () {
    console.log('hello world');
  }
  
}

console.log(person.name);
person.sayHello()
person.favLang = 'js'
console.log(person);
delete person.addr
console.log(person);

console.log(person['name']);

// loop in an object

for (let el in person) {
  console.log(el);
  console.log(person[el]);
}

let calculator = {
  add(num1, num2) {
    return num1 + num2;

  },

  minus(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1*num2
  }
}

// array parameter
function adder( ...nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++){
    result += nums[i];
  }
  return result
}

console.log(adder(2, 3, 4, 5, 6));

let arr = [1, 2, 3, 4]
let arr2 = [...arr]
console.log(arr2);
arr.push(1)
console.log(arr);
console.log(arr2);

// this keyword

let per = {
  name: 'Shihab',
  add: {
    city: 'Dhaka',
    zip: 1020,
  },
  interest:['js','java','c','c++'],
  sayHello() {
    console.log('Hello',this.name);
  },
  printInterest() {
    this.interest.forEach(function (el) {
      console.log(this.name +' loves '+ el);
    }, this);
  }
}
per.sayHello()
per.printInterest()

// this can invoke in function->global obj
// and in method/object ->parent obj

// arrow function

// let sayhello = (name) => {
//   return 6;
// }
let sayhello = (name) => 6;
console.log(sayhello());
