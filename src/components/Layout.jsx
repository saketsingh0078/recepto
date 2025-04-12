import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Graph from "./Graph";
const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="w-full h-full flex relative">
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block absolute md:relative z-50`}
        >
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>
        <div className="w-full md:w-[calc(100%-194px)] flex flex-col bg-[#F5F5F5]">
          <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
