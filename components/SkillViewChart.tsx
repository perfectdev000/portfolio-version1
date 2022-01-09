import * as React from "react";
import PieChart1 from "./PieChart1";
import PieChart2 from "./PieChart2";
import LineChart from "./LineChart";
export default function SkillViewChart() {  
  return (
    <div className="w-full h-full bg-white"  style={{backgroundColor:'#D9EEE1'}}>
      <div className="-mr-4 -ml-8">
        <div className="md:p-4 w-full h-full grid grid-cols-1 md:grid-cols-3">
          <PieChart1/>
          <div className="col-span-2">            
            <div className="md:hidden h-8 w-full"></div>
            <LineChart/>
          </div>
        </div>
      </div>
    </div>
  );
}