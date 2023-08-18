import React from "react";
import {
  BsCalendar,
  BsFillBuildingFill,
  BsHouseDoorFill,
  BsSearch,
  BsMoonFill,
} from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { IoMdListBox, IoMdSettings, IoMdExit } from "react-icons/io";
import { PiDiamondsFourDuotone, PiToiletPaperDuotone } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import SidebarElement from "./SidebarElement";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen">
      <div className="w-72 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <SidebarElement
            icon={PiDiamondsFourDuotone}
            title="RentLLC"
            backgroundColor="bg-blue-600"
            textColor="text-white"
          />

          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

          <SidebarElement
            icon={BsHouseDoorFill}
            title="Dashboard"
            active={true}
          />

          <SidebarElement icon={BsSearch} title="Cleaner Search" />

          <SidebarElement icon={BsCalendar} title="Projects" />

          <SidebarElement icon={BsFillBuildingFill} title="Properties" />

          <SidebarElement icon={IoMdListBox} title="Checklist" />

          <SidebarElement icon={FaCreditCard} title="Payments" />

          <SidebarElement icon={RiTeamFill} title="My Team" />

          <SidebarElement icon={PiToiletPaperDuotone} title="Inventory" />

          <SidebarElement icon={IoMdSettings} title="Settings" />
        </div>
        <div className="flex flex-col items-center">
          <SidebarElement icon={BsMoonFill} title="Dark Mode" />
          <SidebarElement icon={IoMdExit} title="Logout" />
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
