// import the data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select("tbody");

// create a function to build a table
function buildTable(data) {
    
    // clear out any existing data
    tbody.html("");

    // loop through each object in the data and
    // append a row and cells for each value in the row
    data.forEach((dataRow) => {
        
        // append a row to the table body
        let row = tbody.append("tr");
        
        // loop through each field and add each value to a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            
        });
    });
}