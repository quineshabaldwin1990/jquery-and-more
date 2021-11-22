const body = $("body");

const div = $(`<div id='hello-world'>
                    Hello World
                </div>`);


const chart = $(`<div>
                <canvas id="chart"></chart>
            </div>`);

            
const polar = $(`<div>
            <canvas id="polar"></polar>
        </div>`);

body.append(div);
body.append(chart);
body.append(polar);

div.click(function () {
    alert("Hello, world!");
});
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  const myChart = new Chart(
    document.querySelector(`#chart`),
    config
  );

  const data1 = {
    labels1: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets1: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)' 
    ]
    }]
  };
  const config1 = {
    type: 'polarArea',
    data: data,
    options: {}
  };
  const myChart1 = new Chart(
    document.querySelector(`#polar`),
    config1
  );












