// Sort the data by Greek search results descending
//let sortedByGreekSearch = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

let sortedByGreekSearch = data.sort(function getSort(a, b){
  return b.greekSearchResults - a.greekSearchResults});

// Slice the first 10 objects for plotting
slicedData = sortedByGreekSearch.slice(0, 10);
console.log(slicedData);
// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the Greek Data
let trace1 = {
  x: reversedData.map(object => object.greekSearchResults),
  y: reversedData.map(object => object.greekName),
  text: reversedData.map(object => object.greekName),
  name: "Greek",
  type: "bar",
  orientation: "h"
};

// Data array
// `data` has already been defined, so we must choose a new name here:
let traceData = [trace1];

// Apply a title to the layout
let layout = {
  title: "Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("plot", traceData, layout);
