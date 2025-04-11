import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebarbtn from "./Sidebarbtn";
import Logout from "./Logout";

const sidebarbtn = [
  {
    text: "Leads",
    icon: "/icon/Home-simple-door.png",
  },
  {
    text: "Analytics",
    icon: "/icon/pie-chart-03.png",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="border-[2px] border-[#D9D9D9] w-[194px] ">
      <div className="flex flex-col gap-[12px]">
        <div className="h-[72.45px] border-b-[2px] border-[#D9D9D9] flex items-center justify-center">
          <img className="w-[92px] h-[24.45px]" src="logo.png" alt="logo" />
        </div>
        <div className="flex flex-col gap-[14px]">
          <div className="h-[142px] flex flex-col gap-[12px] pt-[24px] px-[24px]">
            <div className="flex flex-col pl-[12px] pr-[12px] justify-center">
              <h3 className="w-7 h-3 uppercase font-medium text-[10px] tracking-[0.4px] text-[#5C5E64]">
                Main
              </h3>
            </div>
            {sidebarbtn.map((btn) => (
              <Sidebarbtn key={btn.text} text={btn.text} iconImg={btn.icon} />
            ))}
          </div>

          <div className="flex flex-col  gap-[14px] p-[24px] ">
            <div className="self-start h-[12px] w-[146px] pr-[12px] pl-[12px] flex flex-col justify-center ">
              <h3 className="w-7 h-3 uppercase font-medium text-[10px] tracking-[0.4px] text-[#5C5E64]">
                More
              </h3>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <button className="flex w-[147px] h-[40px] rounded-[8px]  gap-[12px] py-[10px] px-[12px]">
                <img
                  className="w-[20px] h-[20px]"
                  src="/icon/setting.png"
                  alt="icon"
                />
                <h3
                  onClick={() => setShowLogout(true)}
                  className="text-[#5C5E64] text-[14px] font-medium  "
                >
                  Logout
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showLogout && <Logout onClose={() => setShowLogout(false)} />}
    </div>
  );
};

export default Sidebar;
