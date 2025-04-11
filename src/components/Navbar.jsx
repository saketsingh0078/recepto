import React, { useState } from "react";

const Navbar = () => {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleClose = () => {
    setInput("");
  };
  return (
    <nav className="w-full h-[75px]  py-[20px] px-[15px] flex justify-between items-center bg-white">
      <div className="w-[151px] h-[37px] flex items-center justify-center gap-[7px]">
        <img
          className="w-[30px] h-[27px]"
          src="/icon/Vector.png"
          alt="anotherlogo"
        />
        <h3 className="w-[107px] h-[18px] text-[#12263c] whitespace-nowrap text-[14px] font-[600]">
          Company Name
        </h3>
      </div>

      <div className="w-full h-[45px] flex items-center gap-[14px] justify-end ">
        <div className="w-[304px] h-[45px] flex items-center border-[1px] border-[#DDDDDD] rounded-[8px] p-[12px] gap-[10px]">
          <div className="flex w-[18px] h-[18px] items-center justify-center">
            <img
              className="w-[13.5px] h-[13.5px]"
              src="/icon/search.png"
              alt="search"
            />
          </div>
          <input
            value={input}
            onChange={handleInput}
            className="w-[224px] h-[21px] text-[14px] font-[500] p-2 text-[#353535] placeholder:text-[#353535] placeholder:text-[14px] focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <div
            className="bg-[#DDDDDD] rounded-[34px] w-[18px] h-[18px] flex items-center justify-center hover:bg-[#EDEFF2] cursor-pointer"
            onClick={handleClose}
          >
            <img
              className="w-[7px] h-[7px]"
              src="/icon/close.png"
              alt="close"
            />
          </div>
        </div>
        <button
          className="h-[40px] rounded-[8px] bg-[#2859DF]
          border-[1px] border-[#DDDDDD] py-4 px-[20px] flex items-center gap-[10px] hover:bg-[#2859DF]/80 transition-all duration-300"
        >
          <img className="w-[24px] h-[24px]" src="/icon/coin.png" alt="coin" />
          <p className="font-[600] text-[14px] text-[#FFFFFF] ">0 credits</p>
        </button>
        <div className="flex justify-between items-center">
          <div className="flex items-center w-[176px] gap-[6px]">
            <div className="relative">
              <img
                className=" w-[40px] h-[40px] rounded-[200px] "
                src="/avatar/Avatar.png"
                alt="avatar"
              />
              <div className="w-[10px] h-[10px] rounded-[5px] border-[1.5px] border-[#FFFFFF] bg-[#12B76A] absolute top-[28px] left-[28px]"></div>
            </div>

            <div className="flex flex-col ">
              <h3 className="text-[14px] font-[600]">Anand Kumar</h3>
              <h4 className="text-[14px] font-[500] text-[#667085]">Admin</h4>
            </div>
          </div>
          <div className="w-[24px] h-[24px] flex items-center justify-center  ">
            <img src="/icon/down-line.png" alt="down-line" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
