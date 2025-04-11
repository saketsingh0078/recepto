import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import LeadList from "./LeadList";
import Analytic from "./Analytic";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="w-full h-full flex ">
        <Sidebar />
        <div className="w-[calc(100%-194px)] flex flex-col bg-[#F5F5F5]">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
