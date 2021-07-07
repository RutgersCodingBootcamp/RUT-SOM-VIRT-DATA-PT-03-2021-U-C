let ratings = ['G', 'PG', 'PG-13', 'R']


// Create a function to calculate the annual average of a length
function durationMean(films, rating) {
  // Initialize variables to increment
  let count = 0;
  let total = 0;
  
  // Loop through the array of films
  for (let i = 0; i < films.length; i++) {
    
    // Store the movie at index `i` for evaluation
    movie = films[i];

    // Compare `rating` value to `rating` provided as argument
    if (movie.rating == rating){

      // Increment by `metric` argument value
      total += movie.rental_duration;
      // Increment by one
      count += 1
    }
  }
  
  // Calculate the average value
  let meanDuration = total / count;

  // Return the calcuated average
  return meanDuration;
}

// Invoke the average duration function
// Calculate the average for each rating individually
let durationG = durationMean(films, "G", metric)
let durationPG = durationMean(films, "PG", metric)
let durationPG_13 = durationMean(films, "PG-13", metric)
let durationR = durationMean(films, "R", metric)

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