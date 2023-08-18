import React from "react";
import { FiPlusCircle, FiUserPlus } from "react-icons/fi";

const Host = () => {
  return (
    <div className="flex items-center gap-x-8 mx-4">
      <div className="relative w-[34rem] h-[17rem] mb-4 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/interior.png')] bg-cover bg-center opacity-50 rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300"></div>
        <h1 className="opacity-100 z-10 text-black text-2xl font-bold">
          ADD PROPERTY
        </h1>
        <FiPlusCircle className="z-10 mt-2" size={40} />
      </div>
      <div className="relative w-[34rem] h-[17rem] mb-4 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('/washing.png')] bg-cover bg-center opacity-50 rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300"></div>
        <h1 className="opacity-100 z-10 text-black text-2xl font-bold">
          FIND CLEANER
        </h1>
        <FiUserPlus className="z-10 mt-2" size={40} />
      </div>
    </div>
  );
};

export default Host;
