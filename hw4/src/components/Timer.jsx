import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actionTypes } from '../store/actionTypes';
import Button from './Button';

const mapStateToProps = (store) => {
  const { newPatriciant } = store
  return {
    newPatriciant
  }
}

const mapDispatchToProps = (dispatch) => {
  const { ADD_PARTICIANT, SET_IS_SHOW_TIMER } = actionTypes;
  return {
    registerParticiant: (id, name, secondName, time) => {
      dispatch({type: ADD_PARTICIANT, payload: {id, name, secondName, time}})
    },
    setIsShowTimer: () => {
      dispatch({ type: SET_IS_SHOW_TIMER });
    },
  };
};

const Timer = (props) => {
  const { newPatriciant, setIsShowTimer, registerParticiant } = props;
  const { id, name, secondName } = newPatriciant;

  const [times, setTimes] = useState({
    second: '00',
    minute: '00',
    hours: '00',
  });
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const [isReset, setIsReset] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [isStop, setIsStop] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor((counter % 3600) / 60);
        const hoursCounter = Math.floor(counter / 3600);

        let second = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
        let minute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;
        let hours = String(hoursCounter).length === 1 ? `0${hoursCounter}` : hoursCounter;

        setTimes({
          second,
          minute,
          hours,
        });
        setCounter(counter + 1);
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const handleStop = () => {
    setIsActive(false);
    setIsSave(true);
    setIsReset(true);
    setIsStop(false);
  };
  const handleStart = () => {
    setIsActive(true);
    setIsStop(true);
    setIsStart(true);
  };
  const handleReset = () => {
    setIsActive(false);
    setIsStop(false);
    setIsReset(false);
    setIsSave(false);
    setIsStart(false);
    setTimes({
      second: '00',
      minute: '00',
      hours: '00',
    });
    setCounter(0);
  };
  const handeCancel = () => {
    setIsShowTimer();
  };
  const handeSave = () => {
    if (counter) {
      setIsShowTimer();
      registerParticiant(id, name, secondName, {times, counter})
    }
  };

  return (
    <div className="particiant-timer">
      <div className="wrapp">
        <div className="title"> Patriciant</div>
        <p className="info">ID: {id}</p>
        <p className="info">
          Patriciant: {name} {secondName}
        </p>

        <div className="timer">
          {times.hours} : {times.minute} : {times.second}
        </div>
        <div className="btn__wrapp">
          <Button className={isStart ? 'disable' : 'start'} onClick={handleStart}>
            Start
          </Button>
          <Button className={isStop ? 'stop' : 'disable'} onClick={handleStop}>
            Stop
          </Button>
          <Button className={isReset ? 'reset' : 'disable'} onClick={handleReset}>
            Reset
          </Button>
        </div>

        <div className="btn__bottom">
          <Button className={'cancel'} onClick={handeCancel}>
            Cancel
          </Button>
          <Button className={isSave ? 'save' : 'disable'} onClick={handeSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
