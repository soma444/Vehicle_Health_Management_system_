import React from 'react';
import Chart from "react-apexcharts";


const MyCharts2 = () => {
    const series = [ //data on the y-axis
    {
      name: "coolant Temperature",
      data: [31,31,30.5,30,29.5,29,28,30,31,31,32,40,50,60,70,80,90,92,95,92,91]
    }
  ];
      
  const options = { //data on the x-axis
    chart: { id: 'area-chart'},
    xaxis: {
      categories: ["16:30","17:08","17:17","17:31","17:43","17:44","17:57","18:18","18:39","25:24","26:28","29.36","30:87","35:36","40:48","55:12","1:36:44","1:46:36","1:54:13","2:02:23","2:36:36"]
    },
      chart: {
              type: 'area',
              height: 350,
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      max: 100
                    }
                  }],
                },
              },
            colors: [
              "#246dec",
              "#cc3c43",
              "#367952",
              "#f5b74f",
              "#4f35a1",
              "#D2691E",
              "#008B8B",
            ],
            dataLabels: {
                  enabled: false
                },
            legend: {
                  show: false
                },
      plotOptions: {
              bar: {
                distributed: true,
                borderRadius: 4,
                horizontal: false,
                columnWidth: '40%',
              }
            },
    };
  
    return (
      <div>
        <Chart
          options={options}
          series={series}
          type="area"
          width="450"
        />
      </div>
    )
  }
  
  export default MyCharts2;