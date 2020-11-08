// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var form = d3.select("#form");

form.on("submit",runEnter);
button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement1 = d3.select('#datetime').property('value')
    var inputElement2 = d3.select('#city').property('value')
    var inputElement3 = d3.select('#state').property('value')
    var inputElement4 = d3.select('#country').property('value')
    var inputElement5 = d3.select('#shape').property('value')

    var filteredData = tableData

    if(inputElement1 !== null && inputElement1 !== '') {
        filteredData = filteredData.filter(dat => dat.datetime ===inputElement1)
        console.log(inputElement1)
    }
    if(inputElement2 !== null && inputElement2 !== '') {
        filteredData = filteredData.filter(dat => dat.city ===inputElement2)
        console.log(inputElement2)
    }
    if(inputElement3 !== null && inputElement3 !== '') {
        filteredData = filteredData.filter(dat => dat.state ===inputElement3)
        console.log(inputElement3)
    }
    if(inputElement4 !== null && inputElement4 !== '') {
        filteredData = filteredData.filter(dat => dat.country ===inputElement4)
        console.log(inputElement4)
    }
    if(inputElement5 !== null && inputElement5 !== '') {
        filteredData = filteredData.filter(dat => dat.shape ===inputElement5)
        console.log(inputElement5)
    }

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
        //console.log(row)
        row.append('th').text(filteredData[i].datetime)
        row.append('th').text(filteredData[i].city)
        row.append('th').text(filteredData[i].state)
        row.append('th').text(filteredData[i].country)
        row.append('th').text(filteredData[i].shape)
        row.append('th').text(filteredData[i].durationMinutes)
        row.append('th').text(filteredData[i].comments)
    }
}