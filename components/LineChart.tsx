import React from "react";
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series =  [
  { name: "Shopping",data: [20, 41, 35, 51, 49]},
  { name: "Sports",data: [15, 31, 23, 49, 62 ]},
  { name: "Food",data: [ 31, 23, 49, 62, 28 ]},
  { name: "Clothes",data: [18, 34, 19, 33, 45 ]} 
];
const settings =  {
  chart: { height: 350,type: 'line',zoom: {enabled: false}},
  dataLabels: {enabled: false},
  stroke: {curve: 'smooth'},
  title: {text: 'Product Trends by Month',align: 'left'},
  grid: {row: {colors: ['#f3f3f3', 'transparent'],  opacity: 0.3},},
  xaxis: { categories: ['2013', '2015', '2017', '2019', '2021'],}
}

export default class LineChart extends React.Component<{},{}> {    
  render() {    
    return (      
      <Chart options={settings} series={series} type="line"  />         
    );
  }
}