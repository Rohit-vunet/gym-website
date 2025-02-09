import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const transition = { type: "spring", duration: 1.2 };

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
      {/* Left Side */}
      <div className="left-t">
        <span className="test-header">TESTIMONIALS</span>
        <span className="gray-text">WHAT THEY</span>
        <span className="white-text">SAY ABOUT US</span>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
          className="review-text"
        >
          {testimonialsData[selected].review}
        </motion.span>

        <motion.span
          key={`${selected}-name`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
          className="reviewer"
        >
          <span className="highlight">{testimonialsData[selected].name}</span> - {testimonialsData[selected].status}
        </motion.span>
      </div>

      {/* Right Side */}
      <div className="right-t">
        {/* Image Container with Animation */}
        <div className="image-container">
          <motion.img
            key={selected}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={transition}
            src={testimonialsData[selected].image}
            alt={testimonialsData[selected].name}
            className="testimonial-img"
          />
        </div>

        {/* Arrows */}
        <div className="arrows">
          <img src={leftArrow} alt="Left Arrow" onClick={handlePrev} />
          <img src={rightArrow} alt="Right Arrow" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
