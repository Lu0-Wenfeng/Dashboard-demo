import { CardProps } from "@/types";
import React from "react";

const Card = ({ location, details }: CardProps) => {
  const [backgroundImage, roomType, status] = details;
  return (
    <div
      className="inline-block w-[30rem] h-[30rem] m-2 cursor-pointer rounded-md hover:scale-105 ease-in-out duration-300 shadow  relative bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-4 left-4 flex space-x-2 bg-opacity-50 rounded p-1">
        <span className="bg-purple-400 text-black p-2 rounded">{roomType}</span>
        <span className="bg-yellow-200 text-black p-2 rounded">{status}</span>
      </div>
      <div className="absolute bottom-4 left-4 bg-white text-black font-medium p-2 rounded">
        {location}
      </div>
    </div>
  );
};

export default Card;
