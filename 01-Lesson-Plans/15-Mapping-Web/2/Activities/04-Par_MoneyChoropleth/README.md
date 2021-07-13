# Choropleth Map of LA Income

In this activity, you and a partner will create a choropleth map that visualizes the median household incomes of Los Angeles and the surrounding counties.

## Instructions

* A **choropleth map** has areas that are shaded or patterned in proportion to the statistical variable that the map is representing. It also provides a way to easily visualize how a measurement varies across a geographical area. It does this by showing the level of variability within a region.

* You and your partner will use a new plugin named [leaflet-choropleth](https://github.com/timwis/Leaflet-choropleth) to create this map. You can find the plugin in the `dist` folder of the repository.

* You'll work your way through this activity step by step with your partner. The class will reconvene after each step to review what everyone did together before moving on to the next step.

## Individual Steps

**Step 1:** Get all the data with d3, and log it to the console. In Google Chrome, open `index.html`. In Chrome, open **Developer tools**, and then go to the Console tab. Explore the data by using the console, and find where the data stores the Median Household Income (`MHI2016`) for each feature. Note that the amount of data is large, so it might take up to 30 seconds for it to load.

**Step 2:** Download `choropleth.js` from the `leaflet-choropleth` repository, place it in your `js` folder, and then in your `index.html` file, uncomment the following line:

* `<script type="text/javascript" src="static/js/choropleth.js"></script>`

**Step 3:** Using the [leaflet-choropleth documentation](https://github.com/timwis/leaflet-choropleth), create a new choropleth layer. Make sure to do the following:

* Change the `valueProperty` to the property that you want to base the map on.

* Define an `onEachFeature` method that binds a popup containing the value of the feature to the layer. Display the zip code and the median household income.

**Step 4:** Consult the [leaflet-choropleth examples](https://github.com/timwis/leaflet-choropleth/blob/gh-pages/examples/legend/) for how to add a legend. Make sure to do the following:

* Use `L.control` to add a control (and to choose its position).

* Use `L.DomUtil.create('div', 'info legend')` to create a `div` with the `info` and `legend` classes,

* Loop through the colors and values of your choropleth data, and add them with `div.innerHTML`,

* Return `div` when done.

## Hints

* As you examine the GeoJSON data, look for `MHI2016` or `Median Household Income 2016`.

* Check out the [colorbrewer2](http://colorbrewer2.org/) website, which supplies color schemes (in hex values) that you can use to customize a choropleth map.

---
© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.	
