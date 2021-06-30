// Initialized arrays
let names = []
let greekNames = []
let romanNames = []
let greekSearchResults = []
let romanSearchResults = []

// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
  row = searchResults[i];
  names.push(row.pair);
  greekNames.push(row.greekName);
  romanNames.push(row.romanName);
  greekSearchResults.push(row.greekSearchResults);
  romanSearchResults.push(row.romanSearchResults);
}

// Trace1 for the Greek Data
let trace1 = {
  x: names,
  y: greekSearchResults,
  text: greekNames,
  name: "Greek",
  type: "bar"
};

// Trace 2 for the Roman Data
let trace2 = {
  x: names,
  y: romanSearchResults,
  text: romanNames,
  name: "Roman",
  type: "bar"
};

// Create data array
let data = [trace1, trace2];

// Apply a title to the layout
let layout = {
  title: "Greek vs Roman gods search results"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
