// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch

var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];

// Iterate through each student/grade pair
grades.forEach(([student, grade]) => {

  // Append one table row per student/grade
  var row = tbody.append("tr");

  // append one cell for the student and one cell for the grade
  row.append("td").text(student);
  row.append("td").text(grade);
});
