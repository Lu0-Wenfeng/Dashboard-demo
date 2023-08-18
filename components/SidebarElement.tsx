import { SidebarElementProps } from "@/types";
import Link from "next/link";
import React from "react";

const SidebarElement = ({
  icon,
  title,
  backgroundColor = "bg-white",
  textColor = "text-gray-600",
  active = false
}: SidebarElementProps) => {
  return (
    <Link href="/">
      <div
        className={`flex items-center cursor-pointer  transform transition-all ease-in-out duration-300 ${active ? "active-element" : "hover:scale-105 hover:bg-blue-300 hover:text-blue-500 hover:font-semibold hover:rounded-md"}`}
      >
        <div className="flex items-center">
          <div
            className={`cursor-pointer mx-4 my-4 p-2 rounded-lg inline-block ${active ? "bg-blue-300" : backgroundColor} ${textColor}`}
          >
            {React.createElement(icon, { size: 40 })}
          </div>
          <div className="text-left text-container ">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default SidebarElement;
