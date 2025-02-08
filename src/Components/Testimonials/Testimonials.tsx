import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const length = testimonialsData.length;

  const handlePrev = () => {
    setSelected((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelected((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonials">
     
      <div className="left-t">
        <span className="test-header">TESTIMONIALS</span>
        <span className="gray-text">WHAT THEY</span>
        <span className="white-text">SAY ABOUT US</span>

        <span className="review-text">{testimonialsData[selected].review}</span>
        <span className="reviewer">
          <span className="highlight">{testimonialsData[selected].name}</span> - {testimonialsData[selected].status}
        </span>
      </div>


      <div className="right-t">
        <div className="image-container">
          <img
            src={testimonialsData[selected].image}
            alt={testimonialsData[selected].name}
            className="testimonial-img"
          />
        </div>

        
        <div className="arrows">
          <img src={leftArrow} alt="Left Arrow" onClick={handlePrev} />
          <img src={rightArrow} alt="Right Arrow" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
