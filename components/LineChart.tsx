import React from "react";
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series =  [
  { name: "LAMP stack",data: [55, 47, 21, 17, 9]},
  { name: "MERN Stack",data: [0, 0, 11, 34, 86 ]},
  { name: "Web Development",data: [ 31, 23, 49, 62, 66 ]},
  { name: "Mobile Development",data: [23, 27, 21, 18, 24 ]} ,
  { name: "Desktop Development",data: [46, 54, 22, 15, 8 ]} ,
  { name: "Data Science",data: [18, 32, 19, 23, 15 ]} 
];
let data:{};
data =  {
  chart: { height: 350,type: 'line',zoom: {enabled: false}},
  dataLabels: {enabled: false},
  stroke: {curve: 'smooth'},
  title: {text: 'Work Trends By Year',align: 'left'},
  grid: {row: {colors: ['#f3f3f3', 'transparent'],  opacity: 0.3},},
  xaxis: { categories: ['2013', '2015', '2017', '2019', '2021'],}
}

export default class LineChart extends React.Component<{},{}> {    
  render() {    
    return (
      <div style={{height:'350px'}}>
      <Chart options={data} series={series} type="line" height={350}/>         
      </div>
    );
  }
}