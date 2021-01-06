// from data.js
var tableData = data;

// YOUR CODE HERE!

// ForEach to append data to table
var tbody = d3.select("tbody");

tableData.forEach((sighting) => {
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Filter data by dates

//Button and filter
var button = d3.select("#filter-btn");

// function for filtering on button click
button.on("click", function() {
    tbody.html("");

    var input= d3.select("#datetime");
    var inputValue = input.property("value");

    var filtered = tableData.filter(sighting => sighting.datetime === inputValue);

    filtered.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });        
});