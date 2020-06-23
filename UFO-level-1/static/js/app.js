// from data.js
var tableData = data;

// YOUR CODE HERE!
var table_body = d3.select("table>tbody");
var button = d3.select("button")
var form = d3.select("form")

button.on("click",InputFunction);
form.on("submit",InputFunction);

function InputFunction(event){
    console.log(d3.event.target);
    d3.event.preventDefault();
    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");
    var returnData = tableData.filter(ufo => ufo.datetime === inputValue);
    table_body.html("");
    returnData.forEach(function(sighting){
        var row = table_body.append("tr");
        Object.entries(sighting).forEach(function([key,value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
 