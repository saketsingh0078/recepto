import React from "react";

const LeadChart = ({ title, logo, value }) => {
  return (
    <div className="flex flex-col gap-4 w-[223px] h-[187px] p-8 bg-[#FFFFFF] rounded-[6px] border-[1px] border-[#E8E8E8] hover:scale-105 hover:shadow-md transition-all duration-300">
      <img className="w-[40px] h-[40px]" src={logo} alt="thumbup" />
      <h3 className="text-[14px] font-[600] text-[#676767]">{title}</h3>
      <h2
        className="text-[24px] font-[500]
      text-[#1C1C1C]"
      >
        {value}
      </h2>
    </div>
  );
};

export default LeadChart;
