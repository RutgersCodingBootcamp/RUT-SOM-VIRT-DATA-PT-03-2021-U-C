let ratings = ['G', 'PG', 'PG-13', 'R']

// Metric variable for function inputs
let metric = "length"
// let metric = "rental_rate"
// let metric = "replacement_cost"

// Function to calculate and plot the annual average of a metric
function plotMetric(films, ratings, metric) {
  // Initialize an array to hold metric averages
  let metricArray = []

  // Loop through the array of yeras
  for (let i =0; i < ratings.length; i++) {
    // Store the year at index `i` for evaluation
    rating = ratings[i]

    // Initialize variables to increment
    let count = 0;
    let total = 0;

    // Loop through the array of books
    for (let j = 0; j < films.length; j++) {
      // Store the book at index `j` for evaluation
      row = films[j];

      // Compare `Year` value to `year` provided as argument
      if (row.rating == rating){

        // Increment by `metric` argument value
        total += row[metric];
        // Increment by one
        count += 1
      }
    }
    // Calculate the average value
    let meanValue = total / count

    // Append the average value to the  `metricArray`
    metricArray.push(meanValue)
  }
  
  // Assign `years` array argument to `x`
  // Assign the `metricArray` with averages for each year to `y`
  let trace1 = {
    x: ratings,
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

// Invoke the plotting function
plotMetric(films, ratings, metric)