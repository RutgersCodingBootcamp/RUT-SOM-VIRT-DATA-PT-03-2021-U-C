// Create an array of each country's numbers
let us = Object.values(data.us);
let uk = Object.values(data.uk);
let canada = Object.values(data.canada);

// Create an array of music provider labels
let labels = Object.keys(data.us);

// Display the default plot
function init() {
  let data = [{
    values: us,
    labels: labels,
    type: "pie"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let data = [];

  if (dataset == 'us') {
      data = us;
  }
  else if (dataset == 'uk') {
      data = uk;
  }
  else if (dataset == 'canada') {
      data = canada;
  }
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
