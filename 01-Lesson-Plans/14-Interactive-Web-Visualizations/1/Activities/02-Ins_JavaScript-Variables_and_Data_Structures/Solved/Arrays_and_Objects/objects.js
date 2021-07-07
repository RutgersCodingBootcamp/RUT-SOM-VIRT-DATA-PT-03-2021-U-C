// objects are collections of properties. Properties are key-value pairs
let city = {
    name: "Chicago",
    state: "Illinois",
    area: 234.21,
    nickname: "Second City"
};

// to access a property from a JavaScript object, there are two options
// 1) Bracket notation, similar to python
console.log(city['name']); // output: "Chicago"

// 2) Dot notation (the preferred convention in JavaScript)
console.log(city.state); // output: "Illinois"

// properties can be overwritten by assigning a new value
city.nickname = "The Windy City";
console.log(city);

// to add a property to an existing object, simply assign a value to a new key
city.population = 2695598;
console.log(city);
