import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="app">
    <Sidebar/>
    <div className="outlet">
      <Outlet/>
    </div>      
  </div>
  );
};

export default Layout;
