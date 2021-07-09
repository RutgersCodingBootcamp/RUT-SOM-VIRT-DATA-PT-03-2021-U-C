d3.selectAll("button").on("click", function () {
  // What will be logged out? What is `this` in this case?
  console.log(this);
  // Answer: It will console log the `button` element.
});

d3.selectAll("li").on("click", function () {
  // you can select the element just like any other selection
  let listItem = d3.select(this);
  listItem.style("color", "blue");

  let listItemText = listItem.text();
  console.log(listItemText);
});