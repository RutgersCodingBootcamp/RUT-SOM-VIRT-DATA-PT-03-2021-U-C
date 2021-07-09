// An unsorted array
let numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
let sorted = numArray.sort(function sortFunction(a, b) {
  return b - a;
});
console.log(sorted);

// Reverse the array order
let reversedArray = sorted.reverse();
console.log(reversedArray);

// Slice the first five elements of the sortedAscending array, assign to a letiable
let sliced = reversedArray.slice(0, 5);
console.log(sliced);


