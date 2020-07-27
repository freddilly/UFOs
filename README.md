# UFOs
## Resources:
Visual Studio Code 1.45.1, Jupyter Notebook 6.0.3, JavaScript ECMAScript, HTML
Data: data.js
Code: app.js

## Challenge Overview
In this challenge, I created a JavaScript table portraying data about UFO citings. I then applied filters to the table that allow the user to filter the page by: date, city, state, country, and shape of the object. I then displayed the table in an HTML page, where the user is able to input what parameters they would like to filter the table by. The more detailed steps of this process are listed below.
Technical Steps:
- I first imported the dataset, and then used the buildTable function to build a table out of the original JavaScript dataset.
- I then used the updateFilters function to check to see if any inputs had been applied to filter the table, if so, the filter was added to the list. In this step, I used an if else statement, where when the if statement (the filter being applied) was true, the key-value pair for the filter was added to the filters dictionary. If the statement was false, no filters were added.
- I then used the filterTable functon to filter the table to only show values matching the designated filters. I did this by using a forEach loop that looped through the filters dictionary, and then applied each of the filters to the dataset.
- Finally, I incorporated the table and filters into an HTML page. In this page, I used a button and event listener to enable the page to update when filters are entered and the "Filter Table" button is pressed. 
