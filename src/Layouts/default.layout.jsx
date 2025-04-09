import React from 'react';

const defaultLayoutHoc = (Component) => 
    (...props) => {
  return (
    <div><Component {...props}/></div>
  )
}

export default defaultLayoutHoc;