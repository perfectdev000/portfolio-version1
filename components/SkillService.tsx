import * as React from "react";
import PieChart1 from "./PieChart1";
import PieChart2 from "./PieChart2";
import LineChart from "./LineChart";
export default function SkillService() {  
  return (
    <div className="w-full h-full bg-white">
      <div className='title w-full text-center font-bold text-32 md:text-45 text-gray-700 p-4' >Skill Service</div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 p-4">
        <PieChart1/>
        <div className="col-span-2">
          <LineChart/>
        </div>
      </div>
    </div>
  );
}