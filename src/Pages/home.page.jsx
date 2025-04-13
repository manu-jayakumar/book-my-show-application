import React, { useState } from "react";
import defaultLayoutHoc from "../Layouts/default.layout";
import HeroCarosalComponent from "../components/HeroCarousal/HeroCarosalComponent";
import EntertainmentCardComponent from "../components/Entertainment/EntertainmentCardComponent";
import PosterSliderComponent from "../components/PosterSlider/PosterSliderComponent";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
  return (
    <>
      <HeroCarosalComponent />
      <div className="container mx:auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-grey-800 sm:ml-3 ml-0 my-0">
          The best of Entertainment
        </h1>
        <EntertainmentCardComponent />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSliderComponent
          title="Recommended Movies"
          subject="List of Recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src=""
              alt="rupay"
              className="w-full h-full "
            />
          </div>
          <PosterSliderComponent
            title="premiers"
            subject="Brand new releases every Friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className=" container mx-auto px-4 md:px-12 my-8">
        <PosterSliderComponent
            title="online Streaming Events"
            subject="Online Stream Events"
            posters={onlineStreamEvents}
            isDark={false} 
            />
      </div>
    </>
  );
};
export default defaultLayoutHoc(HomePage);
