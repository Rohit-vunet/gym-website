import React from 'react';
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
     
      <div className="left-r">
        <img src={image1} alt="Workout 1" className="large-img" />
        <img src={image2} alt="Workout 2" className="wide-img" />
        <img src={image3} alt="Workout 3" className="small-img" />
        <img src={image4} alt="Workout 4" className="medium-img" />
      </div>

   
      <div className="right-r">
        <span className="highlight-text">Some Reasons</span>

        <div className="headline">
          <span className="stroke-text">Why</span>
          <span className="bold-text"> Choose Us?</span>
        </div>


      
        <div className="reasons-list">
          <div className="reason">
            <img src={tick} alt="tick" />
            <span>Over 140+ expert coaches</span>
          </div>
          <div className="reason">
            <img src={tick} alt="tick" />
            <span>Train smarter and faster than before</span>
          </div>
          <div className="reason">
            <img src={tick} alt="tick" />
            <span>1 Free Program for New Members</span>
          </div>
          <div className="reason">
            <img src={tick} alt="tick" />
            <span>Reliable Partners</span>
          </div>
        </div>

      
        <div className="partners">
          <span className="partners-title">Our Partners</span>
          <div className="logos">
            <img src={nb} alt="New Balance" />
            <img src={adidas} alt="Adidas" />
            <img src={nike} alt="Nike" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
