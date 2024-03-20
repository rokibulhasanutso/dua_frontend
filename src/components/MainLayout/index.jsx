import React from "react";
import SettingSidebar from "../molecules/SettingSidebar";
import NavBar from "../molecules/NevBar";
import SideNav from "../molecules/SideNav";

const MainLayout = ({ children }) => {

  return (
    <div className="h-screen px-10 pt-10">
      <div className="flex h-full gap-7">
        <SideNav />
        <div className="flex-1 flex flex-col gap-6">
          <NavBar />
          <div className="flex-1 flex h-[calc(100vh-112px)]">
            <div className="flex-1">{children}</div>
            <SettingSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
