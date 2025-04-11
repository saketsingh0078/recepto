import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebarbtn = ({ text, iconImg }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (text === "Leads") {
      navigate("/leads");
    } else if (text === "Analytics") {
      navigate("/analytics");
    }
  };

  const isActive = () => {
    if (text === "Leads" && location.pathname === "/leads") return true;
    if (text === "Analytics" && location.pathname === "/analytics") return true;
    return false;
  };

  return (
    <button
      onClick={handleClick}
      className={`w-[146px] h-[40px] rounded-[8px] py-[10px] px-[12px] flex gap-[12px] bg-[#EDEFF2] hover:bg-[#D4DEF9] transition-colors ${
        isActive() ? "bg-[#D4DEF9]" : ""
      }`}
    >
      <img className="w-[20px] h-[20px]" src={iconImg} alt="icon" />
      <h3
        className={`text-[14px] font-medium ${
          isActive() ? "text-[#2859DF]" : "text-gray-600"
        }`}
      >
        {text}
      </h3>
    </button>
  );
};

export default Sidebarbtn;
