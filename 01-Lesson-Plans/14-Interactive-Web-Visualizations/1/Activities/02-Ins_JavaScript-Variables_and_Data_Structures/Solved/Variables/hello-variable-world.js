// JavaScript Variables work a lot like Python variables, but they should be initialized with the `let` keyword.

// variables in JavaScript can be assigned string values...
let name = "Homer Simpson";

// ...boolean values...
let isEmployed = true;

// ...numerical values...
let age = 39;
let hourlyWage = 11.99;

// ...or expressions using other variables.
let dailyWage = hourlyWage * 8;
let weeklyWage = dailyWage * 5;

console.log('Hello JavaScript World!')
console.log('We use console.log() to print in JavaScript')
console.log('Why? Because the print() function will try to send the page to your printer!')
console.log(`Did you know that ${name} is ${age} years old and makes $${weeklyWage} per week?`)

// we can also define constant variables with the `const` keyword. This tells JavaScript that the variable can't
// be assigned a new value

const pi = 3.14159265358979

console.log(`The value of pi is approximately ${pi}, and always will be!`)

pi = 3; // this will give an Uncaught TypeError: Assignment to constant variable.

// JavaScript Objects work a lot like Python dictionaries
let homer = {
  name: "Homer Jay Simpson",
  age: 39
}

let marge = {
  name: "Marjorie Jacqueline Simpson",
  age: 34
}

let bart = {
  name: "Bartholomew JoJo Simpson",
  age: 10
}

let lisa = {
  name: "Lisa Marie Simpson",
  age: 10
}

let maggie = {
  name: "Margaret Simpson",
  age: 1
}

// JavaScript Arrays are a lot like Python lists

let simpsons = [homer, marge, bart, lisa, maggie]

console.log(simpsons)
