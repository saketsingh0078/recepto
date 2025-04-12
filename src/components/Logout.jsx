import React from "react";
import Bluebtn from "./Bluebtn";
import { useDispatch } from "react-redux";
import { login } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Logout = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(login(false));
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 bg-black/30 z-50">
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="w-[472px] h-[411.84px] rounded-[12px] py-[24px] px-[12px] flex flex-col bg-white shadow-[0px_8px_8px_-4px_rgba(16,24,40,0.08),0px_20px_24px_-4px_rgba(16,24,40,0.14)]">
          <div className="flex flex-col gap-[36px] justify-center items-center py-[25px]">
            <div className="w-[376px] h-[26.84px]">
              <img
                className="w-[101px] h-[26.84px]"
                src="/logo.png"
                alt="logo"
              />
            </div>

            <div className="w-[378px] h-[229px] flex flex-col gap-[32px]">
              <div className="w-[378px] h-[69px] flex flex-col justify-center ">
                <h3 className="text-[#3C3C3C] text-[32px] font-[700]">
                  Log out ?
                </h3>
                <p className="text-gray-400 font-[600] text-[16px] leading-[25px]">
                  You'd have to login again to th platform
                </p>
              </div>

              <div className="flex flex-col gap-[16px]">
                <Bluebtn
                  text="Logout"
                  containerClass="bg-[#2859DF] text-[#FFFFFF] hover:bg-[#2859DF]/90 transition-all duration-300"
                  onClick={handleLogout}
                />
                <Bluebtn
                  text="Cancel"
                  containerClass="bg-[#FFFFFF] text-[#2859DF] hover:bg-[#F5F5F5] transition-all duration-300"
                  onClick={onClose}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
