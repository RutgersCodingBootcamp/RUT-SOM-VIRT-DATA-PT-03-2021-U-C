// Create a map object.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define a markerSize() function that will give each city a different radius based on its population.
function markerSize(population) {
  return Math.sqrt(population) * 50;
}

// Each city object contains the city's name, location, and population.
var cities = [
  {
    name: "New York",
    location: [40.7128, -74.0059],
    population: 8550405
  },
  {
    name: "Chicago",
    location: [41.8781, -87.6298],
    population: 2720546
  },
  {
    name: "Houston",
    location: [29.7604, -95.3698],
    population: 2296224
  },
  {
    name: "Los Angeles",
    location: [34.0522, -118.2437],
    population: 3971883
  },
  {
    name: "Omaha",
    location: [41.2524, -95.9980],
    population: 446599
  }
];

// Loop through the cities array, and create one marker for each city object.
for (var i = 0; i < cities.length; i++) {
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius to equal the output of our markerSize() function:
    // This will make our marker's size proportionate to its population.
    radius: markerSize(cities[i].population)
  }).bindPopup(`<h1>${cities[i].name}</h1> <hr> <h3>Population: ${cities[i].population.toLocaleString()}</h3>`).addTo(myMap);
}
