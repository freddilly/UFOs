var data = [
    {
      datetime: "1/1/2010",
      city: "benton",
      state: "ar",
      country: "us",
      shape: "circle",
      durationMinutes: "5 mins.",
      comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
    },
    {
      datetime: "1/1/2010",
      city: "bonita",
      state: "ca",
      country: "us",
      shape: "light",
      durationMinutes: "13 minutes",
      comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
    }
  ];
  
  
  
  const tableData = data;
  // Reference the HTML table using d3
  var tbody = d3.select("tbody");
  function buildTable(data) {
      // First, clear out any existing data
      tbody.html("");
    
      // Next, loop through each object in the data
      // and append a row and cells for each value in the row
      data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
    
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
    }
  //Keep track of all filters
  var filters = {};
  //This function will replace your handleClick function
  function updateFilters(){
      var changedElement = d3.select(this).select("input");
      //Save the element, value, and id of the filter that was changed
      let datetime = d3.select("#datetime").property("value");
      let city = d3.select("#city_filter").property("value");
      let state = d3.select("#state_filter").property("value");
      let country = d3.select("#country_filter").property("value");
      let shape = d3.select("#shape_filter").property("value");
      //If a filter value was entered then add that filterId and value
      //to the filters list. Otherwise, clear that filter from the filters object
      if (datetime){
          filters["datetime"]=datetime;
      }
      if (city){
          filters["city"] = city;
      }
      if (state){
          filters["state"] = state;
      }
      if (country){
          filters["country"] = country;
      }
      if (shape){
          filters["shape"] = shape;
      }
      else {
          filters = filters;
      }
  //     //Call function to apply all filters and rebuild the table
  //     filterTable();
    console.log('filters', filters)
      console.log('bind')
  }
  function filterTable() {
      //Set the filteredData to the tableData
      let filteredData = tableData;
      //Loop through all of the filters and keep any data that matches the filter values
      Object.entries(filters).forEach(([key, value]) => {
          filteredData = filteredData.filter(row => row[key] === value);
        });
      //Finally, rebuild the table using the filtered data
      buildTable(filteredData);
  }
  //Attach an event to listen for changes to each filter
  //Hint: you'll need to select the event and what it is listening for within each set of parenthesis
  d3.selectAll("#filter-btn").on("click", updateFilters);
  //Build the table when the page loads
  buildTable(tableData);
  