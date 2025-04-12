import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";

//React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages

import HomePage from "./Pages/home.page";
import MoviePage from "./Pages/movie.page";
import PlayPage from "./Pages/play.page";


const App = () => {
  return (
    <Routes>
   <Route path="/" element={<HomePage/>} />
   <Route path='/movies/:id'element={<MoviePage/>} />
   <Route path='/plays' element={<PlayPage/>} />
   </Routes> 
    );
};

export default App;