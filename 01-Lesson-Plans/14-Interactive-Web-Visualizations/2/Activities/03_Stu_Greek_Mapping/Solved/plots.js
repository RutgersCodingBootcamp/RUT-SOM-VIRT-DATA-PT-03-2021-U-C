console.log(data);

// Greek god names
let names = data.map(function (row){
  return row.greekName
});

// Trace for the Greek Data
let trace1 = {
    x: data.map(row => row.greekName),
    y: data.map(row => row.greekSearchResults),
    type: "bar"
  };

// Data trace array
let traceData = [trace1];

// Apply the group barmode to the layout
let layout = {
  title: "Greek gods search results"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", traceData, layout);