import React from "react";
import Chart from "./Chart";
import LeadChart from "./LeadChart";
import UserTable from "./UserTable";

const chartData = [
  {
    logo: "/CompanyImg.png",
    title: "ReceptoNetLeads",
    total: "400",
    details: [
      {
        title: "Unlocked",
        value: "129",
        class: "bg-[#2859DF]",
      },
      {
        title: "Yet to Unlock",
        value: "271",
        class: "bg-[#D4DEF9]",
      },
    ],
    chartImg: "/blue-graph.png",
    containerClass: "bg-[#2859DF]",
    barClass: "bg-[#D4DEF9]",
  },
  {
    logo: "/adImg.png",
    title: "OrgoNetLeads",
    total: "594",
    details: [
      {
        title: "Contacted",
        value: "179",
        class: "bg-[#FF8E26]",
      },
      {
        title: "Yet to Contact",
        value: "394",
        class: "bg-[#FFE0DB]",
      },
    ],
    chartImg: "/red-graph.png",
    containerClass: "bg-[#FF8E26]",
    barClass: "bg-[#FFE0DB]",
  },
];

const leadChartData = [
  {
    logo: "/thumbup.png",
    title: "Liked Leads",
    value: "23.4K",
  },
  {
    logo: "/assigned.png",
    title: "Assigned Leads",
    value: "23.4K",
  },
  {
    logo: "/thumbup.png",
    title: "Liked Leads",
    value: "23.4K",
  },
  {
    logo: "/assigned.png",
    title: "Assigned Leads",
    value: "23.4K",
  },
];

const Analytic = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <div className=" flex flex-col gap-8 p-4 justify-center ">
        <div className="flex gap-8 justify-around px-[80px] ">
          <div className="flex flex-col gap-2 ">
            {chartData.map((item) => (
              <Chart key={item.title} {...item} />
            ))}
          </div>
          <div className="flex  justify-center items-center">
            <div className="w-[469px] h-[385px] flex flex-wrap gap-4 items-center ">
              {leadChartData.map((item) => (
                <LeadChart key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="px-[150px]">
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default Analytic;
