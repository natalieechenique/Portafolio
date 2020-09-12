import React from 'react';
import laptop from "../img/laptop.png";
// import '../css/footer.css';

export const Laptop = () =>{
    return(
       <div className ='laptop-cont'>
            <div className ='laptop'>
            <img src={laptop} alt="Laptop" width="250px"/>
            </div>
      </div>
    )
  }