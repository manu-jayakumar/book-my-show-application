import React from 'react';
import MovieNavbar from '../components/Navbar/movienavbar.component';

const movieLayoutHoc = (Component) => 
    (...props) => {
  return (
    <div>
      <MovieNavbar />
      <Component {...props} /> 
      <div>Footer</div>
      </div>
  );
};

export default movieLayoutHoc;