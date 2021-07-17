# Citi Bike Maps

We'll devote a large part of this class to working on a mini project in Leaflet. We'll use the Citi Bike API to get the status and location of every Citi Bike station in New York. We recommend completing the basic version before trying the advanced version of our mini project. The following instructions include both versions.

## Instructions

After completing the basic version, write code to complete as much of the advanced version as possible.

### Basic Version

1. Use the [Citi Bike station information endpoint](https://gbfs.citibikenyc.com/gbfs/en/station_information.json) to get information about the station names and locations. In your browser, take a moment to study the data that the endpoint sends back. Note the following:

    * Each object in the `stations` array has `station_id`, `name`, `capacity`, `lat`, and `lon` properties.

    * The [logic.js](Unsolved/static/js/logic.js) file contains coordinates that you can use to position a Leaflet map over New York City.

2. Create a function named `createMap` that takes `bikeStations` as an argument. This function will create both the tile layer and an overlay with the pins for each station.

3. Create a second function named `createMarkers` that will take `response` as an argument. This function will do the following:

    * Using the response from a future d3 call, loop through the stations, and create a marker to represent each station.

    * Give each marker a popup to display the name and capacity of its station.

4. In the `createMarkers` function, pass the resulting bike markers to the `createmap` function as a `layerGroup`.

5. Using d3, retrieve json data from the [Citi Bike station information endpoint](https://gbfs.citibikenyc.com/gbfs/en/station_information.json), and call the `createMarkers` function.

The following image shows the basic map:

    ![Citibike](Images/44-Citibike_basic.png)

### Advanced Version

1. Write code to perform a second API call to the [Citi Bike station status endpoint](https://gbfs.citibikenyc.com/gbfs/en/station_status.json). Take a few moments to study the data that the endpoint returns. In particular, notice `station_id`, `num_bikes_available`, `is_installed`, and `is_renting`.

2. Using the data that you got from the second API call, try to add the following functionality:

    * In the popup for each marker, display the number of available bikes.

    * Add a layer control, and split the markers into the following layer groups:

        * **Coming Soon:** This applies if a station isn't yet installed.

        * **Empty Stations:** This applies if a station has no available bikes.

        * **Out of Order:** This applies if a station is installed but not renting.

        * **Low Stations:** This applies if a station has less than five available bikes.

        * **Healthy Stations:** This applies if a marker doesn't fall into any of the previous layer groups.

3. Use a Leaflet plugin to create different types of markers to represent the layers. The following step shows an example map that uses [Leaflet.ExtraMarkers](https://github.com/coryasilva/Leaflet.ExtraMarkers). However, feel free to use another plugin if you prefer.

4. Add a legend to your map to explain the different markers. The following image shows an example of the final advanced map:

      ![Citibike](Images/44-Citibike_advanced.png)

5. When you complete the app, deploy it to GitHub Pages.

## Hints

* Make sure that you run `python -m http.server` in the folder that contains your files. Because you'll do all the work on the front end of your app, you won't need to restart the router for any changes that you make.

* Here are some helpful links:

  * [Leaflet map example](https://leafletjs.com/reference-1.7.1.html#map-example)

  * [Citi Bike station information API endPoint](https://gbfs.citibikenyc.com/gbfs/en/station_information.json)

  * [Leaflet popup documentation](http://leafletjs.com/reference.html#popup)

  * [Citi Bike station status API endPoint](https://gbfs.citibikenyc.com/gbfs/en/station_status.json)

  * [Leaflet layer groups documentation](http://leafletjs.com/examples/layers-control/)

  * [Leaflet.ExtraMarkers](https://github.com/coryasilva/Leaflet.ExtraMarkers)

  * [Leaflet legend documentation](http://leafletjs.com/examples/choropleth/#custom-legend-control)
  
  ---
  © 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.	
