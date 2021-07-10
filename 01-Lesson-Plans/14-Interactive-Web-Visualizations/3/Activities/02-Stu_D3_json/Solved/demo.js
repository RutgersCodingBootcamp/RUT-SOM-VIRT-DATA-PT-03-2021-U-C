// Get the Roadster endpoint
const roadster = "https://api.spacexdata.com/v3/roadster";

// Fetch the JSON data and console log it
d3.json(roadster).then(function(data) {
  console.log(data);
});

// Get the capsules endpoint
const capsules = "https://api.spacexdata.com/v3/capsules";

// Fetch the JSON data and console log it
d3.json(capsules).then(function(data) {
  console.log(data);
});