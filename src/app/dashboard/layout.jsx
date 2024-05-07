import React from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";

const layout = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/12 bg-black text-white h-lvh sticky">
        <Sidebar />
      </div>
      <div className="w-11/12">
        <div className="p-1 border-2">
          <Navbar />
        </div>
        <div className="flex justify-center items-center w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default layout;
