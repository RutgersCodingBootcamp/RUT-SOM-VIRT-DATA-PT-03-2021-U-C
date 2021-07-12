// An array of cities and their locations
var cities = [
  {
    name: "Paris",
    location: [48.8566, 2.3522]
  },
  {
    name: "Lyon",
    location: [45.7640, 4.8357]
  },
  {
    name: "Cannes",
    location: [43.5528, 7.0174]
  },
  {
    name: "Nantes",
    location: [47.2184, -1.5536]
  }
];

// An array that will store the created cityMarkers
var cityMarkers = [];

for (var i = 0; i < cities.length; i++) {
  // loop through the cities array, create a new marker, and push it to the cityMarkers array
  cityMarkers.push(
    L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>")
  );
}

// Add all the cityMarkers to a new layer group.
// Now, we can handle them as one group instead of referencing each one individually.
var cityLayer = L.layerGroup(cityMarkers);

// Define variables for our tile layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Only one base layer can be shown at a time.
var baseMaps = {
  Street: street,
  Topography: topo
};

// Overlays that can be toggled on or off
var overlayMaps = {
  Cities: cityLayer
};

// Create a map object, and set the default layers.
var myMap = L.map("map", {
  center: [46.2276, 2.2137],
  zoom: 6,
  layers: [street, cityLayer]
});

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
