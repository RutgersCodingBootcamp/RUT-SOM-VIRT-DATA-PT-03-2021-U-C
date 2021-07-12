# City Population Layers

In this activity, we'll expand on the previous exercise by adding an overlay to represent the state populations. This layer will appear on the map as white circle vectors.

## Instructions

1. Open the [logic.js](Unsolved/logic.js) file in the `Unsolved` folder.

2. Add logic to this file as follows:

    * Create a layer group for city markers and a separate layer group for state markers. Note that the `cityMarkers` and `stateMarkers` arrays contain all the markers, which have been created for you. Store these layer groups in variables named `cities` and `states`.

    * Create a `baseMaps` object to contain the `street` and `topo` tiles, which have already been defined.

    * Create an `overlayMaps` object to contain the `State Population` and `City Population` layers.

    * Add a `layers` key to the options object in the `L.map` method, and set its value to an array that contains our `street`, `states`, and `cities` layers. These will determine which layers display when the map first loads.

    * Create a layer control, and pass it the `baseMaps` and `overlayMaps` objects. Add the layer control to the map.

## Hints

* If you get stuck, refer to the Leaflet [Layer Groups and Layers Control tutorial](http://leafletjs.com/examples/layers-control/).

* If you succeed, you should be able to toggle between the Street Map and Topographic Map base layers and to turn the State Population and City Population overlays on and off.

---
© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.	
