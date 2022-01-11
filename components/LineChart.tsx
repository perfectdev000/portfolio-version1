import React from "react";
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const series =  [
  { name: "Frontend",data:  [21, 16, 34, 67, 86]},
  { name: "Backend",data:   [19, 13, 15, 34, 35]},  
  { name: "Mobile-UI",data: [17, 20, 21, 24, 23]},
  { name: "Other",data:     [32, 27, 19, 23, 15]}
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