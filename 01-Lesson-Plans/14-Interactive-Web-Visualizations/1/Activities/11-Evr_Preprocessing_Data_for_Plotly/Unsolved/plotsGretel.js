let ratings = ['G', 'PG', 'PG-13', 'R']


// Create a function to calculate the annual average of a length


// Invoke the metric average function
// Calculate the average for each year individually
let durationG = durationMean(films, "G")
let durationPG = durationMean(films, "PG")
let durationPG_13 = durationMean(films, "PG-13")
let durationR = durationMean(films, "R")

// Creat an array of annual averages
let durationArray = [durationG, durationPG, durationPG_13, durationR]

// Create a function to plot the annual average metric results
function plotDuration(durationArray, ratings){

  let trace1 = {
    x: ratings,
    y: durationArray,
    type: "bar"
  }

  let data = [trace1]

  // Chart Title
  let layout = {
    title: "Pagila Rental Films Average Rental Duration"
  };

  Plotly.newPlot("plot", data, layout);
}

// Invoke the plot creating function
plotMetric(durationArray, ratings);