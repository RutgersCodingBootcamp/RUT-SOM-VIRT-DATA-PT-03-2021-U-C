// Array of movie ratings
let movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

// Mean is the average of all the values.
function mean(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let meanValue = total / arr.length;

  return meanValue;
}

// Variance can be found by subtracting the mean from each number in the data set,
// squaring the result, and
// then averaging the square differences.
function variance(arr) {
  let meanValue = mean(arr);
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += (arr[i] - meanValue) ** 2;
  }
  let varianceValue = total / arr.length;
  return varianceValue;
}


// Standard deviation is the square root of the variance
function standardDeviation(arr) {
  let varianceValue = variance(arr);
  let standardDeviationValue = Math.sqrt(varianceValue);

  return standardDeviationValue;
}

// Print to the cosole the Movie Statistical Analysis
console.log("Movie Statistical Analysis");
console.log("--------------------------");
console.log(`The mean is : ${mean(movieScore)}`);
console.log(`The variance is : ${variance(movieScore)}`);
console.log(`The standard deviation is : ${standardDeviation(movieScore)}`);
console.log("");

// Print to the cosole the Rainfall Statistical Analysis
let monthlyAvgRainFall = [3.03, 2.48, 3.23, 3.15, 4.13, 3.23];
console.log("Rainfall Statistical Analysis");
console.log("--------------------------");
console.log(`The mean is : ${mean(monthlyAvgRainFall)}`);
console.log(`The variance is : ${variance(monthlyAvgRainFall)}`);
console.log(`The standard deviation is : ${standardDeviation(monthlyAvgRainFall)}`);
console.log("");

// Print to the cosole the Running Statistical Analysis
let mileRuns = [5.06, 4.54, 5.56, 4.40, 7.10];
console.log("Mile Run Statistical Analysis");
console.log("--------------------------");
console.log(`The mean is : ${mean(mileRuns)}`);
console.log(`The variance is : ${variance(mileRuns)}`);
console.log(`The standard deviation is : ${standardDeviation(mileRuns)}`);
console.log("");
