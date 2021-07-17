// Need to get array of petal lengths and call it x



d3.json("/petal-length").then(response => {

    console.log(response);

    let x = response;

    var trace = {
        x: x,
        type: 'histogram',
    };

    var data = [trace];
    Plotly.newPlot('myDiv', data);

})