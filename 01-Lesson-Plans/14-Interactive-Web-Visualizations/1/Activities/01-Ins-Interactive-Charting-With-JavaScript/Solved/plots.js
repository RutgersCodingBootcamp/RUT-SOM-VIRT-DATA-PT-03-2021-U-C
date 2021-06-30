let xData = [1, 2, 3, 4, 5];
let yData = [1, 2, 4, 8, 16];

let trace1 = {
  x: xData,
  y: yData
};

let data = [trace1];

let layout = {
  title: "A Plotly plot"
};

Plotly.newPlot("plot", data, layout);