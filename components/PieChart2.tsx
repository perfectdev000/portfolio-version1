import React from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

var chartdata={
  series:[42, 21, 17 , 8, 5, 2, 5],
  labels:["Web", "Mobile", "Desktop", "Data Science", "OS & Network", "MultiMedia", "Other"]
}
type PieChartProps = {
  // chartdata:{
  //   series:number[],
  //   labels:string[],
  // },  
};
type PieChartState = {
  
};


export default class PieChart2 extends React.Component<PieChartProps, PieChartState> {
  
  state: PieChartState = {
    // optional second annotation for better type inference    
  };
  render() {
    return (
      
        <Chart options={chartdata} type="donut" width="100%" series={chartdata.series} />
      
    );
  }
}