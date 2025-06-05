let person = {
  name: 'Shihab',
  age: 23,
  interest: ['js','PHP','java']
}

let person2 = {
  name: 'Shak',
  age: 37,
  interest:['cricket','bat','ball']
}

// factory function
function createPerson(name,age,interest) {
  return {
    name: name,
    age: age,
    interest: interest,
    sayHello: function () {
      console.log('Hello');
    }

  }
}

let person1 = createPerson('Abir', 24, ['c', 'python'])
console.log(person1);

// constructor function ->pascal case

function Person3(name, age, interest) {
  this.name = name, 
    this.age = age,
    this.interest=interest
    
}
let p1 = new Person3('Shihab', 23, ['js', 'PHP'])
console.log(p1);

// class
class CrteParson{
  constructor(name, age, interest){
    this.name = name,
      this.age = age,
      this.interest=interest
  }
  sayHello() {
    console.log('Hello',this.name);
  }
}

let p5 = new CrteParson('Shihab', 26, ['js', 'c'])
console.log(p5);

// 
setInterval(function () {
  console.log('shihab');
}, 1000)

