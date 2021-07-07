// a variable can be initialized as an empty array with two square brackets
let myArray = [];

// elements can be added to arrays with the push() method
myArray.push('alpha');
myArray.push('beta');
myArray.push('gamma');
myArray.push('delta');

console.log(myArray); // output: ['alpha', 'beta', 'gamma', 'delta']

// to access a single element from an array, use index notation
// similar to python, JavaScript uses 0-indexing
console.log(myArray[1]); // output: 'beta'

// elements from arrays can be overwritten by assigning a new value
myArray[3] = 'omega';
console.log(myArray); // output: ['alpha', 'beta', 'gamma', 'omega']

// to access a range of values from the array, use the slice() method.
// slice(start, end) returns a new array of the objects at indexing beginning at `start` and up to (but not including) `end`.
console.log(myArray.slice(1,3)); // output: ['beta', 'gamma']
