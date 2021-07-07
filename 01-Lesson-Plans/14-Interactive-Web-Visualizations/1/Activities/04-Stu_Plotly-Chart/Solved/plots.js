let name = 'Travis Taylor'

let title = `${name}'s First Plotly Chart`

let books = ["The Visual Display of Quantitative Information", "Automate the Boring Stuff", "Data Science from Scratch"]

let timesRead = [100, 50, 25]

let trace1 = {
  x: books,
  y: timesRead,
  type: 'bar'
};

let data = [trace1];

let layout = {
  title: title
};

Plotly.newPlot("plot", data, layout);