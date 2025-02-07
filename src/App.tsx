import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import './App.css';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Programs/>
      <Reasons/>
    </div>
  );
};

export default App;
