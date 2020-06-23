var tableData = data;

// YOUR CODE HERE!
var table_body = d3.select("table>tbody");
var button = d3.select("#filter-btn")
var form_date = d3.select("#select-Date")
var form_city = d3.select("#cityname")
var form_state = d3.select("#select-State");
var form_country = d3.select("#select-Country")

button.on("click",InputFunction);

function InputFunction(event){
//    d3.event.preventDefault();
    var value_date = form_date.property("value");
    var value_city = form_city.property("value");
    var value_state = form_state.property("value");
    var value_country = form_country.property("value");
    
    if(value_date==="all"){
        var date_output = tableData
    } else {
        var date_output = tableData.filter(alien=>alien.datetime===value_date)
    };
    
    if(value_city){
        var city_output = date_output.filter(alien=>alien.city===value_city)
    } else {
        var city_output = date_output
    };
    
    if(value_state==="all"){
        var state_output = city_output
    } else {
        var state_output = city_output.filter(alien=>alien.state===value_state)
    };
    
    if(value_country==="all"){
        var country_output = state_output
    } else {
        var country_output = state_output.filter(alien=>alien.country===value_country)
    };
    
    table_body.html("")
    country_output.forEach(function(sighting){
        var row = table_body.append("tr");
        Object.entries(sighting).forEach(function([key,value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });    
};