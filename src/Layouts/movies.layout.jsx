import React from 'react';

const movieLayoutHoc = (Component) => 
    (...props) => {
  return (
    <div><Component {...props} /> </div>
  )
}

export default movieLayoutHoc;