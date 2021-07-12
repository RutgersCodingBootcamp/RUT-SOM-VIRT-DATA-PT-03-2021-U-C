// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([45.52, -122.67], 13);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// Create a new marker.


// Create a circle, and pass in some initial options.


// Create a Polygon, and pass in some initial options.


// The coordinates for each point to use in the polyline


// Create a polyline by using the line coordinates, and pass in some initial options.


// Create a rectangle, and pass in some initial options.

