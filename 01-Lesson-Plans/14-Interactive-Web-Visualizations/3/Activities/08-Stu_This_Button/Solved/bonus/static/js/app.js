// Store the vote data in an array
let data = [];

// Randomly select an episode number for Star Wars
let text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);

// Select the upvote and downvote buttons
let upvote = d3.select(".upvote");
let downvote = d3.select(".downvote");

// Select the counter h1 element
let counter = d3.select(".counter");

// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click", function() {
  // Select the current count
  let currentCount = parseInt(counter.text());

  // Upvotes should increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  counter.text(currentCount);

  // BONUS: Save the vote data
  data.push(["upvote", currentCount]);
});

// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click", function() {
  // Select the current count
  let currentCount = parseInt(counter.text());

  // Downvotes should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  counter.text(currentCount);

  // BONUS: Save the vote data
  data.push(["upvote", currentCount]);
});
