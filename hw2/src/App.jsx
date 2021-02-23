import React, { useState, useEffect } from 'react';
import './App.css';

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`button ${className || ''}`} {...props}>
      {children}
    </button>
  );
};
const App = () => {
  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [hours, setHours] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [isShowContinue, setIsShowContinue] = useState(false);
  const [counter, setCounter] = useState(0);
  const [stopValue, setStopValue] = useState([]);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor((counter % 3600) / 60);
        const hoursCounter = Math.floor(counter / 3600);

        let second =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;

        let minute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;
        let hours =
          String(hoursCounter).length === 1 ? `0${hoursCounter}` : hoursCounter;

        setSecond(second);
        setMinute(minute);
        setHours(hours);

        setCounter(counter + 1); // (counter) => ??
      }, 0);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const handleStop = () => {
    // setIsActive(true)
    setIsActive(false);
    isActive && setIsShowContinue(true);
    isActive &&
      setStopValue((oldArray) => [...oldArray, hours, minute, second]);
  };
  const handleStart = () => {
    setIsActive(true);
    setIsShowContinue(false);
  };
  const handleReset = () => {
    setSecond('00');
    setMinute('00');
    setHours('00');
    setIsActive(false);
    setIsShowContinue(false);
    setCounter(0);
    isActive &&
      setStopValue((oldArray) => [...oldArray, hours, minute, second]);
  };

  return (
    <div className="App">
      <div className="wrapp">
        <div className="timer">
          {hours} : {minute} : {second}
        </div>
        <div className="btn__wrapp">
          <Button
            className={isShowContinue ? 'continue' : 'start'}
            onClick={handleStart}>
            {isShowContinue ? 'Continue' : 'Start'}
          </Button>
          <Button className="stop" onClick={handleStop}>
            Stop
          </Button>
          <Button className="reset" onClick={handleReset}>
            Reset
          </Button>
        </div>
        {stopValue.join(' : ')}
      </div>
    </div>
  );
};

export default App;
