import React from 'react';
import Chart from "react-apexcharts";

const MyCharts = () => {
  const series = [ //data on the y-axis
    {
      name: "Temperature in Celsius",
      data: [83.74319369,86.24552394,84.63760504,89.26558266,90.62251201,75.36383406,86.73130329]
    }
  ];
  const options = { //data on the x-axis
    chart: { id: 'bar-chart'},
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    },
    chart: {
            type: 'bar',
            height: 350,
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
        type="bar"
        width="450"
      />
    </div>
  )
}

export default MyCharts;