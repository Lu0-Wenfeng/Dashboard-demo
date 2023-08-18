import React from "react";
import Navbar from "./Navbar";
import Host from "./Host";
import Carousel from "./Carousel";

const View = () => {
  return (
    <div className="flex flex-col bg-gray-200 h-screen w-full">
      <Navbar />
      <div className="flex flex-col h-auto w-full mx-auto px-4 py-8">
        <p className="ml-8 my-8 font-bold text-3xl">Welcome, Penny.</p>
        <Host />
      </div>
      <div className="flex flex-col h-auto w-full mx-auto px-4 py-8">
        <p className="ml-8 my-8 font-bold text-3xl">My Properties</p>
        <Carousel />
      </div>
    </div>
  );
};

export default View;
