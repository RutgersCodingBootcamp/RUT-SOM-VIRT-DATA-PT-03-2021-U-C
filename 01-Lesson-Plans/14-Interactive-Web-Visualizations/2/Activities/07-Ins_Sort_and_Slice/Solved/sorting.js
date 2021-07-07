// Sort the array in descending order
let numArray = [1, 2, 3];
numArray.sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (3, 2, 1)
  return secondNum - firstNum;
});

// Returns [3, 2, 1]
console.log(numArray);

// Sort the array in ascending order
let numArray2 = [3, 2, 1];
numArray2.sort(function (firstNum, secondNum) {
  // resulting order is (1, 2, 3)
  return firstNum - secondNum;
});

// Returns [1, 2, 3]
console.log(numArray2);

// Sort the array in ascending order, using an arrow function
let numArray3 = [3, 2, 1];
numArray3.sort((firstNum, secondNum) => firstNum - secondNum);
console.log(numArray3);

// Reverse the array
let numArray4 = [1, 2, 3];
numArray4.reverse()
console.log(numArray4);
