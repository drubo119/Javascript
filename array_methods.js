// array map
// it is use when need t create new array using the following array
let nums = [2, 4, 5, 6, 8]
let newarr=nums.map(function (element, idx, array) {
  // return element+2
  if (element < 5) {
    return element
  }
})

let newa=nums.map((element)=> element*2) //can be written as it is
console.log(newarr);

// element is an obj

// practice problem

const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];

//***MAP***
//1. Get array of all names
let allNames = characters.map((el) => el.name)
console.log(allNames);
//2. Get array of all heights
let allHeights = characters.map((el) =>
  el.height)
console.log(allHeights);
//3. Get array of objects with just name and height properties
let objects = characters.map((el) => ({
  name: el.name,
  height: el.height
}))
console.log(objects);
//4. Get array of all first names
let firstName = characters.map((el) => {
  return el.name.split(' ')[0]
})
console.log(firstName);


//***REDUCE***
let num4 = [1, 23, 4, 56, 7]
let result = num4.reduce(function (acc, el, idx, arr) {
  return 6
}, 0)
console.log(result);
//1. Get total mass of all characters
let totalmass = characters.reduce((acc, el) => {
  return acc + Number(el.mass)
},0)
console.log(totalmass);
//2. Get total height of all characters
let totalheight = characters.reduce((acc, el) => {
  return acc + Number(el.mass)
}, 0)
console.log(totalheight);
//3. Get total number of characters by eye color

let eyeColor = characters.reduce((acc, el) => {
  if (acc[el.eye_color]) {
    acc[el.eye_color]++
  } else {
    acc[el.eye_color]=1
  }
  return acc
}, {})
console.log(eyeColor);


//4. Get total number of characters in all the character names
let totalchar = characters.reduce((acc, el) => {
  return acc+el.name.length
}, 0)
console.log(totalchar);

//***FILTER*** ->boolean element return
let number = [12, 3, 4, 5, 7, 8]
let filterNums = number.filter(function (el) {
  return 1;//return a boolean value,check condition
})
console.log(filterNums);
//1. Get characters with mass greater than 100

let mass = characters.filter((el) => {
  return el.mass > 100
})
console.log(mass);

//2. Get characters with height less than 200

let height = characters.filter((el) => {
  return el.height<200
})
console.log(height);
//3. Get all male characters
let male = characters.filter((el) => {
  return el.gender=='male'
})
console.log(male);
//4. Get all female characters

let female = characters.filter((el) => {
  return el.gender == 'female'
})
console.log(female);
//***SORT***
let num2 = [2, 3, 1, 2, 5, 1, 9]
num2.sort((a, b) => {
  return a-b
})
console.log(num2);
//1. Sort by mass
let sortMass = [...characters].sort((a,b)=>{
  return a.mass-b.mass
})
console.log(sortMass);
//2. Sort by height
let sortHeight = [...characters].sort((a, b) => {
  return a.height - b.height
})
console.log(sortHeight);
//3. Sort by name
let sortname = [...characters].sort((a, b) => {
  return a.name.localeCompare(b.name)
})
console.log(sortname);

//4. Sort by gender
let sortgender = [...characters].sort((a, b) => {
  return a.gender.localeCompare(b.gender)
})
console.log(sortgender);

//***EVERY*** ->return single boolean all element to check
let arr = [1, 2, 3, 4, 5, 6]
let isEven = arr.every((el) => {
  return el%2 ==0
})
console.log(isEven);
//1. Does every character have blue eyes?
let isblue = characters.every((el) => {
  return el.eye_color='Blue'
})
console.log(isblue);
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME*** ->return boolean any one
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?