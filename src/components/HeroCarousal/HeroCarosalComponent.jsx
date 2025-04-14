import React from "react";
import { useState } from "react";
import HeroSlider from "react-slick";

const HeroCarosalComponent = () => {
  const [images, setImages] = useState([]);
  return (
    <>
      <div>
        <HeroSlider />
        {images.map((image,index) => {
          <div key={index} className="w-full h-56 md:h-80 py-3">
            <img
              src=""
              alt="Hero Banner"
              className="w-full h-full rounded-md object-cover"
            />
          </div>;
        })}
      </div>
      <div className="hidden lg:block"></div>
    </>
  );
};

export default HeroCarosalComponent;
