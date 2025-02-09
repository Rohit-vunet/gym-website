import React from 'react';
import './Hero.css';
import Heart from '../../assets/heart.png';
import hero_image_back from '../../assets/hero_image_back.png';
import hero_image from '../../assets/hero_image.png';
import Calories from '../../assets/calories.png';

import { motion } from 'framer-motion';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };

  return (
    <div className="hero">
    
      <div className="blur hero-blur"></div>

    
      <div className="left-h">
        <div className="the-best-ad">
          <motion.div
            initial={{ left: '230px' }}
            whileInView={{ left: '8px' }}
            transition={transition}
            className="the-best-animation"
          ></motion.div>
          <span>The Best Fitness Club in Town</span>
        </div>

     
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>

        
        <div className="figures">
          <div>
            <span>140+</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

      
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

     
      <div className="right-h">
  <button className="btn join-now">Join Now</button>

  <motion.div
    className="heart-rate"
    initial={{ scale: 1 }}
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
  >
    <img src={Heart} alt="Heart Rate" />
    <span>Heart Rate</span>
    <span>116 bpm</span>
  </motion.div>
</div>


      <img src={hero_image} alt="Hero" className="hero-image" />
     

    
      <motion.div 
      initial = {{right:"37rem"}}
      whileInView = {{right:"28rem"}}
      transition = {transition}
      className="calories">
        <img src={Calories} alt="Calories Burned" />
        <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
