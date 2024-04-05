import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Navbar from "./Navbar";
// import Customers from "./Customers";
import { Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 sticky ">
        <div className=" col-span-2 hidden lg:block">
          <aside className="sticky top-[70px] x-[3]">
            <Sidebar />
          </aside>
        </div>

        <div className=" col-span-12 lg:col-span-10  z-[-1]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
