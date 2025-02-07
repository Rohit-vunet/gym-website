import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

import nb from "../../assets/nb.png"
import adidas from "../../assests/adidas.png"
import nike from "../../assests/nike.png"
import tick from "../../assests/tick.png"


const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
        <div className='Left-r'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />

        </div>

        <div className='right-r'>
            <span>Some reasons</span>


            <div>
                <span className='storke-text'>why</span>
                <span>choose us </span>
                </div>

            </div>
        </div>
      
    
  )
}

export default Reasons
