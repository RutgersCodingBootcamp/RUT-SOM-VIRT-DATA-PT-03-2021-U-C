// Check out this api
const url = "https://api.spacexdata.com/v2/launchpads";

// js d3.json ~ python requests.get but with promises
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// To actually use the data, we have to use .then
d3.json(url).then(function(data) {
  console.log(data);
});

// Data only exists WITHIN the promise block
console.log(data);
