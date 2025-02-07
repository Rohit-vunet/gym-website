import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
       
        <div className="the-best-ad">
          <div ></div>
          <span>The Best Fitness Club in Town</span>
        </div>

  <div className='hero-text'>
    <div>
      <span className='stroke-text'>shape</span>
      <span>Your</span>
    </div>
    <div>
      <span>Ideal Body</span>
      </div>
      <div>
      <span>In here we will help you to shape and build your ideal body and live up your life to fullest
      </span>
      </div>
     </div>


<div className='figures'>
  <div>
    <span>140+</span>
    <span>expert-coaches</span>
  </div>

  <div>
    <span>+978</span>
    <span>fitness joined</span>
  </div>


  <div>
    <span>+148</span>
    <span>expert coaches</span>
  </div>
</div>
</div>
      <div className="right-h">Right Side
      </div>
    </div>
  );
};

export default Hero;
