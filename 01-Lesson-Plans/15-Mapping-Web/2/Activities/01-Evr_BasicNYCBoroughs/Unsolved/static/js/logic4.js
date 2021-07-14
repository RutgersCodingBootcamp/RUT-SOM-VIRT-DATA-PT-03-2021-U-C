// Creating the map object

// Adding the tile layer


// Use this link to get the GeoJSON data.
var link = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/nyc.geojson";

// The function that will determine the color of a neighborhood based on the borough that it belongs to

// Getting our GeoJSON data

  // Creating a GeoJSON layer with the retrieved data

    // Styling each feature (in this case, a neighborhood)

        // Call the chooseColor() function to decide which color to color our neighborhood. (The color is based on the borough.)


    // This is called on each feature.
   
      // Set the mouse events to change the map styling.

        // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.

        // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
  
        // When a feature (neighborhood) is clicked, it enlarges to fit the screen.

      // Giving each feature a popup with information that's relevant to it
