let ratings = ['G', 'PG', 'PG-13', 'R']

// Metric variable for function inputs
let metric = "length"
// let metric = "rental_rate"
// let metric = "replacement_cost"

// Create a function to calculate the annual average of a metric 
function metricMean(films, rating, metric) {
  // Initialize variables to increment
  let count = 0;
  let total = 0;
  
  // Loop through the array of books
  for (let i = 0; i < films.length; i++) {
    
    // Store the book at index `i` for evaluation
    row = films[i];

    // Compare `rating` value to `rating` provided as argument
    if (row.rating == rating){

      // Increment by `metric` argument value
      total += row[metric];
      // Increment by one
      count += 1
    }
  }
  
  // Calculate the average value
  let meanValue = total / count;

  // Return the calcuated average
  return meanValue;
}

// Invoke the metric average function
// Calculate the average for each year individually
let metricG = metricMean(films, "G", metric)
let metricPG = metricMean(films, "PG", metric)
let metricPG_13 = metricMean(films, "PG-13", metric)
let metricR = metricMean(films, "R", metric)

// Creat an array of annual averages
let metricArray = [metricG, metricPG, metricPG_13, metricR]

// Create a function to plot the annual average metric results
function plotMetric(metricArray, years, metric){

  let trace1 = {
    x: years,
    y: metricArray,
    type: "bar"
  }

  let data = [trace1]

  // Pass metric to chart title
  let layout = {
    title: `Pagila Rental Films Average ${metric}`
  };

  Plotly.newPlot("plot", data, layout);
}

// Invoke the plot creating function
plotMetric(metricArray, ratings, metric)