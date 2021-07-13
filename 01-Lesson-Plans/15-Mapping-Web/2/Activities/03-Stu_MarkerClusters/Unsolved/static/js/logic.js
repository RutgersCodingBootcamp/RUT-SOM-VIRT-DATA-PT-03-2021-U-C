// Creating the map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// To do:

// Store the API query variables.
var baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
// Add the dates in the ISO formats
var date = "$where=created_date between '' and ''";
// Add the complaint type.
var complaint = "&complaint_type=";
// Add a limit.
var limit = "&$limit=";


// Assemble the API query URL.

// Get the data with d3.

  // Create a new marker cluster group.

  // Loop through the data.

    // Set the data location property to a variable.

    // Check for the location property.

      // Add a new marker to the cluster group, and bind a popup.

  // Add our marker cluster layer to the map.
