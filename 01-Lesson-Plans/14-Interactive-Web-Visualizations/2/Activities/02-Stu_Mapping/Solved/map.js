let princesses = [{
    name: "Rapunzel",
    age: 18
  },
  {
    name: "Mulan",
    age: 16
  },
  {
    name: "Anna",
    age: 18
  },
  {
    name: "Moana",
    age: 16
  }
];

// Create an array of just the names from the princesses array
let names = princesses.map(function (princess) {
  return princess.name;
});
console.log("Names:", names);

// Create an array of strings for each princess name, follow by a colon, followed by their age
let namesAndAges = princesses.map(function (princess) {
  return `${princess.name}: ${princess.age}`;
});
console.log("Names and Ages:", namesAndAges);

// Create the same array of strings but with a single line arrow function.
let namesAndAgesArrow = princesses.map(princess => `${princess.name}: ${princess.age}`);

console.log("Names and Ages:", namesAndAgesArrow);