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
  const [times, setTimes] = useState({
    second: '00',
    minute: '00',
    hours: '00'
  });
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

        setTimes({
          second,
          minute,
          hours
        });

        setCounter(counter + 1); 
      }, 0);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const handleStop = () => {
    // setIsActive(true)
    setIsActive(false);
    isActive && setIsShowContinue(true);
    isActive &&
      setStopValue((oldArray) => [...oldArray, `${times.hours} : ${times.minute} : ${times.second}`]);
  };
  const handleStart = () => {
    setIsActive(true);
    setIsShowContinue(false);
  };
  const handleReset = () => {
    setTimes({
      second: '00', 
      minute: '00', 
      hours: '00', 
    })
    setIsActive(false);
    setIsShowContinue(false);
    setCounter(0);
    isActive &&
      setStopValue((oldArray) => [...oldArray, `${times.hours} : ${times.minute} : ${times.second}`]);
  };

  return (
    <div className="App">
      <div className="wrapp">
        <div className="timer">
          {times.hours} : {times.minute} : {times.second}
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
        <ul className={"stop_value_list"}>
          {
            stopValue.map(val => <li>{val}</li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default App;
