import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="app">
      <section className="flex gap-6">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="outlet">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Layout;
