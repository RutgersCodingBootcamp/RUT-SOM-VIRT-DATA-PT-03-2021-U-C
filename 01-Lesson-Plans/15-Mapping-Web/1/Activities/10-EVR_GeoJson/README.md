# GeoJSON

In this activity, we'll plot markers on a map to represent occurrences of earthquakes. To achieve this, we'll work with GeoJSON data from the [U.S. Geological Survey (USGS)](http://earthquake.usgs.gov).

## Instructions

1. Open the [logic.js](Unsolved/logic.js) file.

2. Note that your starter code places an API call to the USGS Earthquake Hazards Program API. Take a moment to study the `features` array that we extract from the response.

3. Add logic to create a GeoJSON layer that contains all the features retrieved from the API call, and add the layer directly to the map. You can reference today's previous activities and the Leaflet [Using GeoJSON with Leaflet](http://leafletjs.com/examples/geojson/) tutorial.

4. Create an `overlayMaps` object by using the newly created earthquake GeoJSON layer. Pass `overlayMaps` to the layer control.

## Bonus

* Create a separate overlay for the GeoJSON and a base layer by using the `street` tile layer and the `topo` tile layer. Add these to a layer control. If you get stuck, refer to the previous activity.

* Add a popup to each marker to display the time and location of the earthquake at that location.

## Hint

Refer to the following Leaflet documentation:

* [GeoJSON](http://leafletjs.com/reference.html#geojson)

* [Using GeoJSON with Leaflet tutorial](http://leafletjs.com/examples/geojson/)

---
© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.	
