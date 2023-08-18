import { PropertiesType } from "@/types";
import React from "react";
import Card from "./Card";

const Carousel = () => {
  const properties: PropertiesType = {
    "Palo Alto": ["/PaloAlto.png", "2B2B", "Ready for Clean"],
    Sunnyvale: ["/sunnyvale.png", "Studio", "Rented"],
    Cupertino: ["/cupertino.png", "2B2B", "Ready for Clean"],
    "Mountain View": ["/MountainView.png", "2B2B", "Rented"],
  };

  return (
    <div className="relative flex items-center">
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll snap-x whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {Object.keys(properties).map((location, index) => (
          <Card
            key={index}
            location={location}
            details={properties[location]}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
