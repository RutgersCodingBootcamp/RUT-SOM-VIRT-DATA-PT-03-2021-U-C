var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 13
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000";

d3.json(url).then(function(response) {

  console.log(response);

  for (var i = 0; i < response.length; i++) {
    var location = response[i].location;

    if (location) {
      L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
    }
  }

});
