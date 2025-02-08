import React from 'react'
import { plansData } from '../../data/plansData'
import './Plans.css'
import { features } from 'node:process'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='plans-container'>
        <div className='programs-header' style={{ gap: '2rem' }}>
       <span className='stoke-text'>READY TO START</span>
       <span>YOUR JOURNEY</span>
       <span className='stoke-text'>NOW WITH US</span>
        </div>
        

        <div className='plans'>
        {plansData.map((Plans, index) => (
        <div className='plan' key={index}>
        {Plans.icon}
        <span>{Plans.name}</span>
        <span>${Plans.price}</span>

        <div className='features'>
            {Plans.features.map((feature, index) => (
                <div className='feature' key={index}>
                    <img src={whiteTick} alt="" />
                    <span key = {index}>{feature}</span>
                </div>
            ))}
        </div>

   <div>
    <span>See more benefits</span>
    </div>
    <button className='btn'>Join now</button>
   </div>

))}
    
    </div>
    </div>
  );
};

export default Plans
