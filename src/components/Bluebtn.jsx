import React from "react";
import { useNavigate } from "react-router-dom";

const Bluebtn = ({ text, containerClass, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={onClick}
      className={` w-[376px] h-[56px] rounded-lg border-[1px] border-[#7F56D9] flex items-center justify-center ${containerClass}`}
    >
      <h3 className="text-[14px] font-[600]">{text}</h3>
    </button>
  );
};

export default Bluebtn;
