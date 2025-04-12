import React from 'react';
import Navbar from "../components/Navbar/navbar.component";

const defaultLayoutHoc = (Component) => 
    (...props) => {
  return (
    <div>
    <Navbar />  
    <Component {...props}/>
    <div>footer</div>
    </div>
    
  );
};

export default defaultLayoutHoc;