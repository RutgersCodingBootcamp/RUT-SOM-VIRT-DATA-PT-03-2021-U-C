// Create a map object.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: 8550405
},
{
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: 2720546
},
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: 2296224
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: 3971883
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: 446599
}
];

// Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup(`<h1>${city.name}</h1> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
    .addTo(myMap);
}
