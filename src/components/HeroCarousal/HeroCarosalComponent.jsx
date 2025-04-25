import React from "react";
import { useState } from "react";
import HeroSlider from "react-slick";

const HeroCarosalComponent = () => {
  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
      genre_ids: [16, 35, 10751, 14, 10749],
      id: 976573,
      original_language: "en",
      original_title: "Elemental",
      overview:
        "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
      popularity: 2723.167,
      poster_path: "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
      release_date: "2023-06-14",
      title: "Elemental",
      video: false,
      vote_average: 7.8,
      vote_count: 1526,
    },
    {
      adult: false,
      backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      genre_ids: [18, 36],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      popularity: 631.846,
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.3,
      vote_count: 2745,
    },
  ]);

  const settings = {
    arrows : true,
    slidesToShow : 1,
    infinite : true,
    speed : 500,
    slideToScroll : 1
    nextArrow: ,
    prevArrow: ,
  };

   const settingsLG = {
     arrows: true,
     slidesToShow: 1,
     infinite: true,
     speed: 500,
     slideToScroll: 1,
     nextArrow: ,
     prevArrow: ,
  };
   };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => {
            <div key={index} className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>;
          })}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => {
            <div key={index} className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>;
          })}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarosalComponent;
