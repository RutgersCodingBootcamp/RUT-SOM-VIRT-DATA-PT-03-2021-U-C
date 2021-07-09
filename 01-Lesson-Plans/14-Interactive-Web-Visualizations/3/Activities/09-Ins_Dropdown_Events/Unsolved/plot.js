// Initializes the page with a default plot
function init() {
    data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }];

    Plotly.newPlot("plot", data);
}

// Call updatePlotly() when a change takes place to the DOM


// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu

    // Assign the value of the dropdown menu option to a letiable


    // Initialize x and y arrays


    // Assign x and y based on the value of the dropdown menu
    if (dataset === 'dataset1') {
        x = [1, 2, 3, 4, 5];
        y = [1, 2, 4, 8, 16];
    } else if (dataset === 'dataset2') {
        x = [10, 20, 30, 40, 50];
        y = [1, 10, 100, 1000, 10000];
    }

    // Use plotly restyle to update the plot
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
}

init();