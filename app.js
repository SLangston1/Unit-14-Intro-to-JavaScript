// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Update each cell's text with
// UFO values (datetime, city, state, country)
 data.forEach(function(UFOsighting) {
    var row = tbody.append("tr");
   Object.entries(UFOsighting).forEach(function([key, value]) {
     // Append a cell to the row for each value
     // in the UFO object
     var cell = tbody.append("td");
     cell.text(value);
   });
 });

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
 
  var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue);

// Get a reference to the table body
var tbody = d3.select("tbody").html("");

// Update each cell's text with
// UFO values (datetime, city, state, country)
filteredData.forEach(function(UFOsighting) {
    var row = tbody.append("tr");
   Object.entries(UFOsighting).forEach(function([key, value]) {
     // Append a cell to the row for each value
     // in the UFO object
     var cell = tbody.append("td");
     cell.text(value);
   });
 });

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  if (inputValue == ""){
  // refresh table with all values
    // Update each cell's text with
// UFO values (datetime, city, state, country)
    data.forEach(function(UFOsighting) {
  var row = tbody.append("tr");
 Object.entries(UFOsighting).forEach(function([key, value]) {
   // Append a cell to the row for each value
   // in the UFO object
   var cell = tbody.append("td");
   cell.text(value);
 });
}); 
  };

});

  
