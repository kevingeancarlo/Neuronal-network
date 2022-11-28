/*
LOADING CSV DATA
Jeff Thompson | 2021 | jeffreythompson.org

Creating visualizations with hand-typed data won't
cut it for long: the kinds of data we'll be using
will likely be longer than we'd like to type, plus
transcribing by hand will be prone to errors and, if
you want to make a change to your data, then you
have to type it all again!

Luckily, we can load a CSV (comma-separated values)
file with our code! Chart.js can't do this on it's
own, so instead we can use D3 (another visualization
library) to handle this for us. Our code gets a little
more complicated, since we have to load the data and
create our chart inside the csv() command, then go
through all the entries to create our 'data' and
'labels' lists.

This chart is pretty barebones with no styling – a
great next step!

DATA SOURCE
+ https://crt-climate-explorer.nemac.org/local-climate-charts/
  ?county=New%20York%2BCounty&city=New%20York%2C%20NY&fips=36061
  &lat=40.7127753&lon=-74.0059728&nav=local-climate-charts

CHALLENGES
1. How could you style this chart to better present
   the data?
2. Can you load one of the other files in the 'data'
   folder? You'll have to change the filename but also
   the 'key' for the column you want to visualize.

*/

// csv file we want to load
let filename = 'data/iris.csv';

// all of your code should be inside this command
d3.csv(filename).then(function(loadedData) {
  
  // let's see if our data loaded correctly
  // (and take a peek at how it's formatted)
  console.log(loadedData);
  
  // empty lists for our data and the labels
  let data =   [];
  let labels = [];

  let data2 =   [];
  let labels2 = [];

  let data3 =   [];
  let labels3 = [];

  let data4 =   [];
  let labels4 = [];
  
  // use a for-loop to load the data from the
  // file into our lists
  for (let i=0; i<loadedData.length; i++) {
    console.log(loadedData[i]);
    
    // get the species and sepal_length for each listing
    // note: the 'keys' here correspond to the headers
    // in our file and need to be typed exactly
    let species =     loadedData[i].species;
    let sepal_length = loadedData[i].sepal_length;
    let sepal_width = loadedData[i].sepal_width;
    let petal_length = loadedData[i].petal_length;
    let petal_width = loadedData[i].petal_width;

    console.log(sepal_length);
    console.log(sepal_width);
    console.log(petal_length);
    console.log(petal_width);
    
    // add the species to our labels        
    labels.push(species);
    labels2.push(species);
    labels3.push(species);
    labels4.push(species);
    // and sepal_length to the data   
    data.push(sepal_length);  
    data2.push(sepal_width);
    data3.push(petal_length);  
    data4.push(petal_width); 
  }
  
  // basic line chart settings
  let options = {
    type: 'line',
    data: {
      labels: labels, // the labels we loaded!
      datasets: [{
        label: 'sepal_length',
        data: data,   // the data we loaded!
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'rgb(100,100,100)'
      }, {
        label: 'sepal_width',
        data: data2,    // the data we loaded!
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'rgb(255,20,147)'
      }]
    }
  };

  let options2 = {
    type: 'line',
    data: {
      labels: labels2,  // the labels we loaded!
      datasets: [{
        label: 'sepal_width',
        data: data2,    // the data we loaded!
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'rgb(255,20,147)'
      }]
    }
  };

  let options3 = {
    type: 'line',
    data: {
      labels: labels3,  // the labels we loaded!
      datasets: [{
        label: 'petal_length',
        data: data3,    // the data we loaded!
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'rgb(128,0,0)'
      }, {
        label: 'petal_width',
        data: data4,    // the data we loaded!
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'rgb(207,181,59)'
      }]
    }
  };

  let options4 = {
    type: 'line',
    data: {
      labels: labels4,  // the labels we loaded!
      datasets: [{
        label: 'petal_width',
        data: data4,    // the data we loaded!
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        borderColor: 'rgb(207,181,59)'
      }]
    }
  };
  
  // with all that done, we can create our chart!
  const myChart = new Chart(
    document.getElementById('myChart'), 
    options
    );

  /* Charts se comentan para no mostrar las cuatro gráficas por separado, se unen en dos gráficos 
   const myChart2 = new Chart(
   document.getElementById('myChart2'), 
    options2
    ); */

  const myChart3 = new Chart(
   document.getElementById('myChart3'), 
    options3
    );
  
  /* Charts se comentan para no mostrar las cuatro gráficas por separado, se unen en dos gráficos 
    const myChart4 = new Chart(
    document.getElementById('myChart4'), 
    options4
    ); */
  
});

