import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { actionTypes } from '../store/actionTypes';

const mapStateToProps = (store) => {
  const { totalParticiant, particiantWinner } = store;
  return {
    totalParticiant,
    particiantWinner,
  };
};
const mapDispatchToProps = (dispatch) => {
  const { SHOW_WINNER } = actionTypes;
  return {
    showWinner: () => {
      dispatch({ type: SHOW_WINNER });
    },
  };
};

const WinnerWindow = (props) => {
  const { totalParticiant, particiantWinner, showWinner } = props;
  const handleShowWinner = () => {
    showWinner();
  };
  return (
    <>
      <div className="winner">
        <div className="winner__wrapper">
          <div className="winner__total">Total particiants: {totalParticiant}</div>
          <Button onClick={handleShowWinner}>Show winner</Button>
        </div>
        {particiantWinner ? (
          <div className="winner__info">
            The Winner
            <div className="winner__data">
              <b>ID:</b> {particiantWinner.id}
            </div>
            <div className="winner__data">
              <b>Name:</b> {particiantWinner.name}
            </div>
            <div className="winner__data">
              <b>Time:</b> {particiantWinner.time.times.hours + ':' + particiantWinner.time.times.minute + ':' + particiantWinner.time.times.second}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WinnerWindow);
