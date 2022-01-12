import React from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

var chartdata={
  series:[70, 20, 10],
  labels:["Frontend", "Backend", "Other"]
}
type PieChartProps = {
  // chartdata:{
  //   series:number[],
  //   labels:string[],
  // },  
};
type PieChartState = {
  
};


export default class PieChart1 extends React.Component<PieChartProps, PieChartState> {
  
  state: PieChartState = {
    // optional second annotation for better type inference    
  };
  render() {
    return (      
      <Chart options={chartdata} type="pie" width="100%" series={chartdata.series} />       
    );
  }
}