import React from 'react';
import './app.scss';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [advice, setAdvice] = useState('');

  const featchAdvice = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice');
    const { advice } = res.data.slip;
    setAdvice(advice);
    // console.log(advice);
  };

  useEffect(() => {
    featchAdvice();
  });

  return (
    <div className="hero">
      <div className="card">
        <h1 className="advice">{advice}</h1>
        <button className="button" onClick={() => featchAdvice()}>
          <span>NEW ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
