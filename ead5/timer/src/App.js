import './App.css';
import './timer.js'
import React, { useState, useEffect } from "react";
import logo from './logo.svg'; // Import the logo correctly
import './App.css';

const Timer = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
        <h2 className="App-header" >Timer </h2>
        <div className="App-header">{time}s</div>
          <button className="button" onClick={startTimer}>Start</button>
          <button className="button" onClick={stopTimer}>Stop</button>
          <button className="button" onClick={resetTimer}>Reset</button>
          </div>
          </div>
    </div>
  );
};

export default Timer;
