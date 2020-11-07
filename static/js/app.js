// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var form = d3.select("#form");

form.on("submit",runEnter);
button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select('#datetime').property('value')
    console.log(inputElement)

    var filteredData = tableData.filter(dat => dat.datetime ===inputElement)

    var list = d3.select("#data-here")
    list.html("")
    list.append('tr').attr('id', 'data-header')
    var rowheader=d3.select("#data-header")
    rowheader.append('th').text('Date').attr('class','table-head')
    rowheader.append('th').text('City').attr('class','table-head')
    rowheader.append('th').text('State').attr('class','table-head')
    rowheader.append('th').text('Country').attr('class','table-head')
    rowheader.append('th').text('Shape').attr('class','table-head')
    rowheader.append('th').text('Duration').attr('class','table-head')
    rowheader.append('th').text('Comments').attr('class','table-head')

    for (var i=0; i<filteredData.length; i++) {
        var listName='Item-'+i
        list.append('tr').attr('id', listName)
        var row = d3.select('#'+listName)
        console.log(row)
        row.append('th').text(filteredData[i].datetime)
        row.append('th').text(filteredData[i].city)
        row.append('th').text(filteredData[i].state)
        row.append('th').text(filteredData[i].country)
        row.append('th').text(filteredData[i].shape)
        row.append('th').text(filteredData[i].durationMinutes)
        row.append('th').text(filteredData[i].comments)
    }
}