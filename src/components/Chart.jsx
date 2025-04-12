import React from "react";
import Progressbar from "./Progressbar";

const Chart = ({
  logo,
  title,
  total,
  details,
  chartImg,
  containerClass,
  barClass,
}) => {
  return (
    <div className="flex gap-6 bg-[#FFFFFF] p-4 rounded-[12px] hover:shadow-md hover:scale-105 transition-all duration-300">
      <div className="w-[274.5px] flex flex-col gap-2">
        <img className="w-[40px] h-[40px]" src={logo} alt="logo" />
        <div className="flex gap-2 items-center">
          <h4 className="font-[600] text-[14px]">{title}</h4>
          <img
            draggable={false}
            className="w-[18px] h-[18px]"
            src="/icon/alert-circle.png"
            alt="alert-circle"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-1">
            <span>{total}</span>
            <h5> Totals</h5>
          </div>
          <Progressbar
            total={total}
            rem={details[0].value}
            containerClass={containerClass}
            barClass={barClass}
          />
          <div className="flex gap-10 ">
            {details.map((item) => (
              <div key={item.title} className="flex gap-2">
                <div
                  className={`w-[22.1px] h-[2.95px] mt-[8px] rounded-[73.66px] ${item.class}`}
                ></div>
                <div className="flex flex-col">
                  <h3 className=" h-[13px] font-[600] text-[13px] text-[#79747E]">
                    {item.title}
                  </h3>
                  <h4 className="w-[56px] height-[15px] font-[600] text-[12px] text-[#11263C]">
                    {item.value} users
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[274.5px] h=[186.73px]">
        <img
          className="w-full h-full"
          src={chartImg}
          draggable={false}
          alt="chartImg"
        />
      </div>
    </div>
  );
};

export default Chart;
