import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import './App.css';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Plans  from './Components/Plans/Plans';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Programs/>
      <Reasons/>
      <Plans/>
    </div>
  );
};

export default App;
