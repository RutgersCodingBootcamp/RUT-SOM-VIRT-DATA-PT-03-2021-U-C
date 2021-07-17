# 15.1 Data Visualization with Leaflet

## Overview

Today's lesson will introduce the students to data visualization with maps. The students will gain a basic understanding of the Leaflet mapping library before diving into several increasingly involved examples.

## Class Objectives

By the end of today's class, students will be able to:

* Discuss the benefits that visualizing data with maps can provide.
* Create maps and plot data with the Leaflet.js library.
* Parse data from the GeoJSON format in order to create map-based data visualizations.
* Describe the concept of layers and layer controls and they can be applied to add interactivity to maps.


## Instructor Prep

<details>
  <summary><strong>Instructor Priorities</strong></summary>

By the end of today's class, the students should:

* Understand the advantages that they'll gain by visualizing data in a geographical context.

* Be able to create a new map and perform basic functions with the Leaflet JavaScript library.

* Gain an understanding of the GeoJSON format.

</details>

<details>
  <summary><strong>Instructor Notes</strong></summary>

* Make sure to review the exercises before class, because this lesson includes plenty of live coding. The `Activities` folder has finished versions of each exercise.

* Open the final activity in this unit with a local server instance, because that activity uses `d3.json()`. To do so, run `python -m http.server`, and then go to the generated URL. If you prefer, you can open all the activities with a server running.

* Note that much of the work of setting up a map remains the same across the examples. Feel free to either use the same HTML file or copy the code.

* Throughout the class, encourage the students to use the [Leaflet documentation](http://leafletjs.com/). It's among the best that we'll work with throughout the entire course.

* Please reference our [Student FAQ](../../../05-Instructor-Resources/README.md#unit-17-geojson-and-leaflet) for answers to questions that students of this program frequently ask. If you have recommendations for more questions, feel free to log an issue or create a pull request with the additions that you'd like.

</details>

- - -

# Class Activities

## 1. Welcome and Create Our First Leaflet Map

| Activity Time:       0:20 |  Elapsed Time:      0:20  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 1.1 Instructor Do: Welcome the Students and Introduce This Week's Topic (0:10)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 1 - 4 to welcome your students to the class, and give them a brief introduction to this week's agenda. Specifically, we'll use Leaflet to create beautiful and informative maps, we'll learn how to use GeoJSON, and we'll learn how to add interactive layers to our maps.

* Ask, why should we visualize data in a geographical context?

  Explain that mapping data can give us insights that looking at flat data might not. To help illustrate this, send the following links, and then demonstrate them live to the class:

  * [Mapping the Spread of Drought Across the U.S.](https://www.nytimes.com/interactive/2014/upshot/mapping-the-spread-of-drought-across-the-us.html?_r=0)

    ![A screenshot depicts the drought map.](Images/01-Drought.png)

  * [Understand and Predict Zika In Brazil With Spatial Analysis](https://carto.com/blog/understand-and-predict-zika-in-brazil)

    ![A screenshot depicts the Zika prevention map.](Images/02-Zika.png)

* Open the subject for discussion with the students. Ask what kinds of datasets or problems seem suitable for this type of data visualization. If the students need prompting, you can use the following examples:

  * Demographic data by state

  * Crime rates

  * Light pollution

</details>

<details>
  <summary><strong>🎉 1.2 Everyone Do: Introduce Leaflet and Create Our First Map (0:10)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 5 and 6 to live code with the class to introduce Leaflet to them.

* Open the [Leaflet website](http://leafletjs.com/), and have the students go there on their computers. Encourage them to explore the site, because this is the library that we'll use for most of the unit.

* For the first exercise, have the class follow along with you as you run through the code that builds the Leaflet map in [the Ins_Basic_Map activity](Activities/01-Ins_Basic_Map). Open it, and then demonstrate it to the class. Let the students know that this is the most basic map that we can make with Leaflet. Also, let them know that it will be our starting point in the wonderful world of geospatial data visualization! Here's the map:

  ![A screenshot depicts a map of Portland, Oregon.](Images/09-PortlandMap.png)

* Open the `logic.js` file in your editor, and then walk through the following key aspects of the code together:

  * The map object. Note that `L.map` accepts two arguments:

    * The `id` of the HTML element that Leaflet should insert the map into.

    * An object that contains the initial options for the new map. (This example uses `center` and `zoom`).

  * The tile layer. Explain to the students that a tile layer corresponds to the background image of our map. Currently, the tile layer is the only thing that we see when we open the basic map. However, Leaflet doesn't provide us with a tile layer by default. Instead, it gives us the option to use various tile layer APIs. For our map, we're using the OpenStreetMap API. We configure our tile layer as follows:

      1. Pass a formatted `queryURL` to the `tileLayer` method.

      2. Add our layer to our map with the `addTo()` method. Note that we'll call this method whenever we want to add something to a map!

* Send the link to the [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) to the students. Together as a class, walk through the steps of setting up a basic map with Leaflet, as follows:

    1. Create a new HTML file.

    2. Add links to the Leaflet Cascading Style Sheets (CSS) and JavaScript libraries.

    3. Create a `<div>` with an `id` of `map`. This is where our map will be inserted. The final file is as follows:

  ```html
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <title>Basic Map</title>

    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossorigin="" />

    <!-- Leaflet JavaScript code -->
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
      integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
      crossorigin=""></script>
      
     <!-- Our CSS -->
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>

  <body>
    <!-- The div where we'll insert our map -->
    <div id="map"></div>

    <!-- JavaScript file -->
    <script type="text/javascript" src="logic.js"></script>
  </body>

  </html>
  ```

    4. Note the following about the preceding code:

        * The CSS that the Leaflet Quick Start Guide suggests exists in a linked style sheet in the `<head>` element.

        * The `<body>` element references the `logic.js` JavaScript file. This file holds the code that creates the map.

    5. Create a `logic.js` file, and link it to the HTML.

    6. Write or copy the following code into your `logic.js` file:

        ```js
        var myMap = L.map("map", {
          center: [45.52, -122.67],
          zoom: 13
        });
       ```

        Explain each of the following steps as you live code them:

        * We define the map object with the `L.map` method.

        * The first argument, `"map"`, is the `id` of the container to insert the map into. It points to the `div` with the `id` of `map` that we just created.

        * The second argument is an object that contains any initial configuration that we want.

        * Our configuration includes the `center` property to set the initial coordinates, and it includes the `zoom` property to set the zoom level.

    7. Add a tile layer to the map, as the following code shows (note that the tile layer is the map image that's shown in the background):

        ```js
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);
        ```

    8. Give the map some CSS styling to make it visible on the page. The following image shows the CSS that allows the map to take up the entire page:

        ![A screenshot depicts the CSS.](Images/08-CSS.png)

    9. Open the HTML file in your browser, and note that we have the following map!

        ![Map of Portland](Images/09-PortlandMap.png)

* Spend some time troubleshooting any problems that the students might have. If they can't properly set up a map, they won't be able to do anything else in class today! Use this opportunity to have the students who were able to create the map help the students who weren't.

</details>

<sub>[Having issues with this activity? Report a bug!](https://form.jotform.com/200705887599168?activityOr=1+-+Welcome+and+Create+Our+First+Leaflet+Map&lessonpageTitle=Data+Visualization+with+Leaflet&lessonpageNumber=15.1&whereIs=DataViz-Lesson-Plans+GitHub&typeA18=https%3A%2F%2Fgithub.com%2Fcoding-boot-camp%2FDataViz-Lesson-Plans%2Fblob%2Fv1.1%2FDataviz-Lesson-Plans%2F01-Lesson-Plans%2F15-Mapping-Web%2F1%2FLessonPlan.md)</sub>

## 2. Complete a Quick Labeling Exercise

| Activity Time:       0:25 |  Elapsed Time:      0:45  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 2.1 Instructor Do: Add Markers to the Map (0:05)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 7 and 8 to introduce this module to the class.

* Using the [Ins_Markers](Activities/02-Ins_Markers) activity as a guide, demonstrate to the students how to add a new marker to the map by creating a new marker object. Note that we use the `addTo()` method to add each map layer. as the following code shows:

  ```js
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  // Create a new marker.
  // Pass some initial options, and then add the marker to the map by using the addTo() method.
  var marker = L.marker([45.52, -122.67], {
    draggable: true,
    title: "My First Marker"
  }).addTo(myMap);
  ```

* Note the following about the preceding code:

  * We pass the starting coordinates for this marker and any options that the [Leaflet marker documentation](http://leafletjs.com/reference-1.6.0.html#marker-option) details. In this case, we made the marker `draggable` and added a `title` that appears when you hover over it.

  * We call the `addTo()` method on our new marker object to add it to the map.

* Explain that Leaflet gives us another useful feature: the ability to add popups to our markers. Using the `bindPopup()` method, we can add information to our marker that will appear when we click it, as the following code shows:

  ```js
  // Binding a popup to our marker
  marker.bindPopup('Hello There!');
  ```

* Explain that we can pass a string of HTML to the `bindPopup()` method. Ask the students how that might prove useful, and then supply concrete examples (for example, to display a city's name and population.)

* Show our finished map:

  ![Pop-Up Map](Images/13-PopUpMap.png)

* Before the next activity, be sure to send out the link to the [Leaflet marker documentation](http://leafletjs.com/reference-1.6.0.html#marker).

</details>
<details>
  <summary><strong>✏️ 2.2 Students Do: Complete a Quick Labeling Exercise (0:15)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 9 and 10 to present this activity to the class.

* In this activity, the students will plot markers for various United States Cities by using Leaflet.

* For the activity instructions, refer to the [City Markers README file](Activities/03-Stu_City_Markers/README.md).

</details>

<details>
  <summary><strong>⭐ 2.3 Review: Complete a Quick Labeling Exercise (0:05)</strong></summary>

* Go over the solution to the last activity, [Stu_City_Markers_Solved](Activities/03-Stu_City_Markers/Solved), together as a class. Note that the following image shows the final popup map:

  ![A screenshot depicts the popup map.](Images/14-PopulationPopUp.png)

* Make sure to highlight the key concepts from this activity, and ask the students the following questions:

  1. Why do we use a loop to create the markers?

      * **Answer:** Rather than write code to manually plot each marker, we can store our location data in an array of objects that we loop through to programmatically plot the markers.

      * Inform the students that the loop isn't required. But, doing it that way is more organized and uses the Don't Repeat Yourself (DRY) principles.

      * Point out that although the Leaflet `marker()` method needs the `location` property, the popup titles that we construct will use the `name` and `population` properties.

  2. What's `bindPopup()` for?

      * **Answer:** We use the `bindPopup()` method to attach popups to marker objects.

      * Point out that we can insert HTML and CSS into the popup by passing a string of HTML and CSS to the `bindPopup` method.

  3. What about the `addTo()` method? What do we use that for? What argument does it take?

      * **Answer:** We use the `addTo()` method to add markers to the map.

      * `addTo()` takes a Leaflet map as an argument. 

      * To help the students understand how all the code ties together, scroll back up to where `myMap` is defined.

  4. What two arguments does `L.marker` seem to receive?

      * **Answer:** First, the `population` property supplies the coordinates for the new marker. (Even though we use a loop to create the markers, the first argument of the `L.marker` method is still an array of coordinates that plots the marker.) Second, we pass any other configuration options that we want to the new marker. Examples include a title and whether the marker should be draggable.

</details>

<sub>[Having issues with this activity? Report a bug!](https://form.jotform.com/200705887599168?activityOr=2+-+Complete+a+Quick+Labeling+Exercise&lessonpageTitle=Data+Visualization+with+Leaflet&lessonpageNumber=15.1&whereIs=DataViz-Lesson-Plans+GitHub&typeA18=https%3A%2F%2Fgithub.com%2Fcoding-boot-camp%2FDataViz-Lesson-Plans%2Fblob%2Fv1.1%2FDataviz-Lesson-Plans%2F01-Lesson-Plans%2F15-Mapping-Web%2F1%2FLessonPlan.md)</sub>

## 3. Add Other Types of Markers

| Activity Time:       0:30 |  Elapsed Time:      1:15  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 3.1 Instructor Do: Add Other Types of Markers (0:10)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 12 and 13 to introduce this module to the class.

* Markers are terrific, but what if we want to represent an area that spans more than a single point on a map? Thankfully, Leaflet allows us to define and plot Scalable Vector Graphics (SVG) shapes to use as markers. This is similar to how we used SVG files with D3. When using the Leaflet API, we refer to these SVG shapes as **vector layers**.

* Open the [Leaflet API reference](https://leafletjs.com/reference-1.6.0.html), and point out the links to [Circle](https://leafletjs.com/reference-1.6.0.html#circle), [Polygon](https://leafletjs.com/reference-1.6.0.html#polygon), [Polyline](https://leafletjs.com/reference-1.6.0.html#polyline), and [Rectangle](https://leafletjs.com/reference-1.6.0.html#rectangle).

* Open the [Ins_Other_Markers](Activities/04-Ins_Other_Markers) activity in your browser, and show off our various custom markers. Open the code in your editor, and illustrate how we define them.

* Point out that `L.polygon`, `L.polyline`, and `L.rectangle` each take an array of arrays as the first argument. Our code supplies a hardcoded array of arrays to `L.polygon` and `L.rectangle`, but it passes a variable that stores an array of arrays to `L.polyline`. Explain that the two approaches are interchangeable. The following code block shows this section of the code:

  ```js
  // Create a circle, and pass in some initial options.
  L.circle([45.52, -122.69], {
    color: "green",
    fillColor: "green",
    fillOpacity: 0.75,
    radius: 500
  }).addTo(myMap);

  // Create a Polygon, and pass in some initial options.
  L.polygon([
    [45.54, -122.68],
    [45.55, -122.68],
    [45.55, -122.66]
  ], {
    color: "yellow",
    fillColor: "yellow",
    fillOpacity: 0.75
  }).addTo(myMap);

  // The coordinates for each point to use in the polyline
  var line = [
    [45.51, -122.68],
    [45.50, -122.60],
    [45.48, -122.70],
    [45.54, -122.75]
  ];

  // Create a polyline by using the line coordinates, and pass in some initial options.
  L.polyline(line, {
    color: "red"
  }).addTo(myMap);

  // Create a rectangle, and pass in some initial options.
  L.rectangle([
    [45.55, -122.64],
    [45.54, -122.61]
  ], {
    color: "black",
    weight: 3,
    stroke: true
  }).addTo(myMap);
  ```

  Note the following:

  * We define a circle with a center point and a radius.

  * We define other shapes and paths by using an array of coordinates that represents the sides or corners.

* Inform the students that we can add plenty of custom styling to these layers. Take a moment to change the styling of the various shapes (`fillColor`, `weight`, and others) to demonstrate a few of the options that we have for styling the vector layers.

* Point out that the [Path options](https://leafletjs.com/reference-1.6.0.html#path) section in the Leaflet documentation has a more-extensive list of options that are available for styling our vector layers. Before the next activity, send out this link.

  ![A screenshot depicts other types of markers.](Images/16-OtherMarkers.png)
  
  **Important:** Wait until after the next activity to send out this example.

</details>

<details>
  <summary><strong>✏️ 3.2 Students Do: Add Other Types of Markers (0:10)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 14 and 15 to present this activity to the class.

* In this activity, the students will work with different types of vector layers.

* For the activity instructions, refer to the [Other Markers README file](Activities/05-Stu_Other_Markers/README.md).

</details>

<details>
  <summary><strong>⭐ 3.3 Review: Add Other Types of Markers (0:10)</strong></summary>

* Spend a few minutes answering any questions that the students might have about the activity that they just did.

* Make sure that the students have some understanding of the activity by asking the following questions:

  1. What are some of the different types of vector shapes that are available to us?

      * **Answer:** There's no need to list them all, but the important ones to know for now are the following:

        * Polyline

        * Polygon

        * Rectangle

        * Circle

  2. What arguments do our vector layers accept when we create them?

      * **Answer:** They accept the following two arguments:

        * An array of coordinates that describes where our shape should appear.

        * A configuration object that describes the styles to apply to the shape. The [Leaflet documentation for Path options](http://leafletjs.com/reference-1.6.0.html#path-option) has a complete list of the style options that we can use for vector layers.

</details>

<sub>[Having issues with this activity? Report a bug!](https://form.jotform.com/200705887599168?activityOr=3+-+Add+Other+Types+of+Markers&lessonpageTitle=Data+Visualization+with+Leaflet&lessonpageNumber=15.1&whereIs=DataViz-Lesson-Plans+GitHub&typeA18=https%3A%2F%2Fgithub.com%2Fcoding-boot-camp%2FDataViz-Lesson-Plans%2Fblob%2Fv1.1%2FDataviz-Lesson-Plans%2F01-Lesson-Plans%2F15-Mapping-Web%2F1%2FLessonPlan.md)</sub>

- - -

## Break

| Activity Time:       0:15 |  Elapsed Time:      1:30  |
|---------------------------|---------------------------|

- - -

## 4. Visualize the World Cup

| Activity Time:       0:30 |  Elapsed Time:      2:00  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 4.1 Instructor Do: Visualize City Populations (0:10)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 18 and 19 to introduce this module to the class.

* Open the [Ins_City_Population](Activities/06-Ins_City_Population) activity, and then demonstrate the new visualization. Note the following:

  * We replaced each marker from the City Markers activity with a vector layer. The size of each vector layer is proportional to the population of the city that it represents.
  
  * We run the `markerSize` function that we previously defined to calculate the circle radius of each city by using its population. The following code shows this calculation:

    ![Marker Radius](Images/17-Marker-Radius.png)

  * We can control the size of a circle vector layer by adjusting its `radius`. Note that because we want the _area_ of the circles to be proportional to each other, we take the square root of the population. We then multiply by 50 so that the vector layers will be visible on the screen.

  * The following image shows the final map. By using a dynamic marker size, more-populous cities have a larger map presence:
  
    ![A screenshot depicts the City Population map.](Images/18-CirclePopulation.png)

* Feel free to show the students the code for this activity and give them a chance to ask any questions that they might have.

  **Important:** However, don't send out the code until after they complete their next exercise.

* Inform the students that their next activity will be to create this visualization themselves.

</details>

<details>
  <summary><strong>✏️ 4.2 Students Do: Visualize the World Cup (0:15)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 20 and 21 to present this activity to the class.

* In this activity, the students will create graduated circle maps. These maps will represent the total amount of all-time three-point wins for the top 10 countries in the Fédération Internationale de Football Association (FIFA) World Cup.

* For the activity instructions, refer to the [Country World Cup README file](Activities/07-Stu_Country_World_Cup/README.md).

</details>

<details>
  <summary><strong>⭐ 4.3 Review: Visualize the World Cup (0:05)</strong></summary>

* Spend a few minutes answering any questions that the students might have about the activity that they just did.

* Make sure that the students understand the following key concepts:

  * We set our marker's `radius` based on the country's points.
  
    **Note:** In the previous example, we divided the population by a constant to set the radius. In this example, by contrast, we multiplied the points by a constant to set the radius.

  * We used conditionals to determine color.

  * We used custom map styles as a way to express data.

  * We used a popup to display additional information.

</details>

<sub>[Having issues with this activity? Report a bug!](https://form.jotform.com/200705887599168?activityOr=4+-+Visualize+the+World+Cup&lessonpageTitle=Data+Visualization+with+Leaflet&lessonpageNumber=15.1&whereIs=DataViz-Lesson-Plans+GitHub&typeA18=https%3A%2F%2Fgithub.com%2Fcoding-boot-camp%2FDataViz-Lesson-Plans%2Fblob%2Fv1.1%2FDataviz-Lesson-Plans%2F01-Lesson-Plans%2F15-Mapping-Web%2F1%2FLessonPlan.md)</sub>

## 5. Perform a Layer Activity

| Activity Time:       0:30 |  Elapsed Time:      2:30  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 5.1 Instructor Do: Demonstrate Layer Groups and Layer Controls (0:10)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 23 and 24 to introduce this module to the class.

* So far, we've used only one layer with our maps. The OpenStreetMap API has supplied these maps to us. However, it's possible to use multiple layers on the same map. We can toggle between layers by using layer controls.

* Navigate to the [Layer Groups and Layers Control](http://leafletjs.com/examples/layers-control/) tutorial in the Leaflet documentation. Note the following example map:

  ![Group Layers](Images/19-Layer-Control.png)

* Demonstrate to the students how we can switch between the Streets and Topographic layers by toggling the layer control. Most students have probably seen this type of functionality while using Google Maps or similar services.

* Point out that Leaflet has two types of layers:

  * **Base layers:** These are mutually exclusive (that is, only one can be visible at a time). In this example, they are the Streets and Grayscale layers. We can see only one or the other at a time and never both. Furthermore, one and only one of these must always be visible.

  * **Overlays:** These go over the base layers, and we can turn them off entirely. In this example, the overlay contains the city markers.

* We can group our markers together to create new overlays by using **layer groups**. We can then toggle a set of related markers on or off as a group. The following image shows the relevant part of the Leaflet tutorial:

  ![A screenshot depicts the Layer Groups section of the Leaflet tutorial.](Images/20-Layer-Groups.png)

* Continue walking the class through the code in the example. Point out that it creates markers in the same way that all the previous activities did. Then, instead of directly applying the markers to the map one at a time, it adds these markers to a layer group named `cities`.

* Inform the students that for the next activity, they should explore the [Layer Groups and Layers Control](http://leafletjs.com/examples/layers-control/) tutorial in the Leaflet documentation. It has helpful examples that they might need for completing the activity.

</details>

<details>
  <summary><strong>✏️ 5.2 Students Do: Perform a Layer Activity (0:15)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 25 and 26 to present this activity to the class.

* In this activity, the students will return to our US cities map. They'll update the code to use layer groups and a layer control. They'll then be able to represent the population for both the entire state and the city.

* For the activity instructions, refer to the [City Population Layers README file](Activities/09-Stu_City_Population_Layers/README.md).

</details>

<details>
  <summary><strong>⭐ 5.3 Review: Perform a Layer Activity (0:05)</strong></summary>

* The following image shows the map with the city vs. the state population data:

  ![Population Layers](Images/21-PopulationLayers.png)

* Send out the [Solved](Activities/09-Stu_City_Population_Layers/Solved) version of the activity, and then go through it as a class. In particular, make sure to highlight the following:

  * We can create layer groups from markers by running the `L.layerGroup` method and passing it an array of layers that we want to group.

  * We define our base layers and overlays by creating objects and passing them to the `L.control.layers` method. This creates labels that identify the different layers in the layer control.

  * We define a `layers` property for our map configuration and describe the layers that we want to be active when the map loads, as the following code shows:
    
    The keys of these objects become the labels that we use for the layer groups inside the layer control.
    
    We pass layer groups to the map. The map should display these layer groups when it loads.
    
    The only thing that we directly add to the map is the layer control.
    
    ![Layer Groups](Images/15-Layer-Groups.png)

* Congratulate the class for completing this activity. With this map, we can  get a quick look at the portion of a state's population that lives in its largest city! We can see that besides having the largest population, New York also has the largest percentage of its state's population. Here's a fun fact: over 40% of New York State's population lives in New York City.

* Answer any questions that the students might have about this example.

</details>

<sub>[Having issues with this activity? Report a bug!](https://form.jotform.com/200705887599168?activityOr=5+-+Perform+a+Layer+Activity&lessonpageTitle=Data+Visualization+with+Leaflet&lessonpageNumber=15.1&whereIs=DataViz-Lesson-Plans+GitHub&typeA18=https%3A%2F%2Fgithub.com%2Fcoding-boot-camp%2FDataViz-Lesson-Plans%2Fblob%2Fv1.1%2FDataviz-Lesson-Plans%2F01-Lesson-Plans%2F15-Mapping-Web%2F1%2FLessonPlan.md)</sub>

## 6. Work with GeoJSON

| Activity Time:       0:30 |  Elapsed Time:      3:00  |
|---------------------------|---------------------------|

<details>
  <summary><strong>📣 6.1 Instructor Do: What's GeoJSON? (0:05)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 28 - 30 to introduce this module to the class.

* Inform the students that while we consider the last example effective for learning purposes, most applications that we build will pull data from existing datasets. And, one of the easiest ways to deliver geographical data is in the GeoJSON format.

* Share the following link with the students, and open it in your browser:

  [GeoJSON earthquake data](<http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson>)

* This GeoJSON document depicts all the earthquakes that have taken place across the globe within the past hour.

* Explain that **GeoJSON** is an open standard format for representing simple geographical features along with their nonspatial attributes by using JavaScript Object Notation (JSON). GeoJSON has the following characteristics:

  * It represents geographical features by coordinates and can attach other properties to these features.

  * The types of features are the following:

    * `Point`

    * `LineString`

    * `Polygon`

    * `MultiPoint`

    * `MultiLineString`

    * `MultiPolygon`

    * We can pass the unmodified feature data to the Leaflet `geoJSON` method, and it will know which kind of marker to make and where to place it. Point out the feature objects in the geoJSON earthquake data response to the students.

* Demonstrate how the data that the class is viewing has a set of geographical coordinates and a list of properties for each point. The [U.S. Geological Survey (USGS) documentation](http://earthquake.usgs.gov/data/comcat/data-eventterms.php) details the meaning of each property.

GeoJSON data might come with a "properties" object that contains metadata about the feature. This supplies us with immediately useful info, such as the magnitude of the earthquake, the place where it occurred, and the time that it was recorded.

When we use GeoJSON with Leaflet, Leaflet expects each feature object to have a "geometry" property. It further expects this property to contain info about the type of marker to display and its coordinates.

* Assure the students that they don't need to worry about each abbreviation for this activity. For now, we just want to plot the time and location of each earthquake. The following image shows the GeoJSON data for a single earthquake:

  ![A screenshot depicts the GeoJSON data.](Images/22-Geo-JSON.png)

* Inform the students that Leaflet has a `geoJSON()` method that we can use to process and create markers by using GeoJSON data as is&mdash;without any modifications. Encourage them to explore the Leaflet documentation to discover exactly [how to handle GeoJSON with Leaflet](https://leafletjs.com/examples/geojson/). In particular, point out and discuss the `onEachFeature` option.

</details>

<details>
  <summary><strong>✏️ 6.2 Students Do: Perform a GeoJSON Activity (0:15)</strong></summary>

* In this activity, the students will work with GeoJSON data to plot the occurrences of earthquakes.

* For the activity instructions, refer to the [GeoJSON README file](Activities/10-Stu_GeoJson/README.md).

</details>

<details>
  <summary><strong>⭐ 6.3 Review: Perform a GeoJSON Activity (0:10)</strong></summary>

* Open the [slideshow](https://docs.google.com/presentation/d/117c6VJsT2-f6PriyvL5Ywl5Qpk-a4LMjI_L82c-IOY8/edit?usp=sharing) and use slides 31 and 32 to present this activity to the class.

* When time is up, send out the link to the [Solved folder](Activities/10-Stu_GeoJson/Solved), and then walk students through the solution.

* Ask the students the following questions, and make sure that they understand the answers:

  1. How do we use to create a GeoJSON layer?

      **Answer:** We pass all the earthquake feature data to the `L.GeoJSON` method. We save its return value (which is the new Leaflet GeoJSON layer) in the `earthquakes` variable.

  2. What's happening with the `onEachFeature` function that we defined?

        **Answer:** During layer creation, Leaflet supplies a built-in hook named `onEachFeature`. We can define a function that performs custom functionality with the addition of each feature object to the GeoJSON layer. In this case, we give each layer a tooltip with the time and location of the earthquake.

  3. What are `baseMaps` and `overlayMaps` for? Why not just add the layers directly to the map?

      **Answer:** We can add the GeoJSON layers directly to the map. But then, we can't use a layer control with those layers.

      After creating our GeoJSON layer, we create a `baseMaps` layer and an `overlayMaps` layer in the same way that we did in the previous activity. In this case, we use earthquakes instead of cities for our overlay.

* Be sure to answer any further questions before dismissing the class.

</details>

<sub>[Having issues with this activity? Report a bug!](https://form.jotform.com/200705887599168?activityOr=6+-+Work+with+GeoJSON&lessonpageTitle=Data+Visualization+with+Leaflet&lessonpageNumber=15.1&whereIs=DataViz-Lesson-Plans+GitHub&typeA18=https%3A%2F%2Fgithub.com%2Fcoding-boot-camp%2FDataViz-Lesson-Plans%2Fblob%2Fv1.1%2FDataviz-Lesson-Plans%2F01-Lesson-Plans%2F15-Mapping-Web%2F1%2FLessonPlan.md)</sub>

- - -

## References

* [Leaflet](https://leafletjs.com/)
* [OpenStreetMap](https://www.openstreetmap.org/copyright)

 -----
# Copyright 

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
