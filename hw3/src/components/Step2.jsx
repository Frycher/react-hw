import React, { useContext } from 'react';
import { actionTypes } from '../store/actionTypes';
import { MyContext } from '../store/context';
import Input from './Input';
import Button from './Button';

const Step2 = (props) => {
  const { state, dispatch } = useContext(MyContext);
  const { currentStep, city, street, house } = state;
  const { NEXT_STEP, PREVIOUS_STEP, SET_DATA_VALUE } = actionTypes;
  const handleCity = (e) => {
    const value = e.target.value;
    dispatch({ type: SET_DATA_VALUE, payload: { city: value } });
  };
  const handleStreet = (e) => {
    const value = e.target.value;
    dispatch({ type: SET_DATA_VALUE, payload: { street: value } });
  };
  const handleHouse = (e) => {
    const value = e.target.value;
    dispatch({ type: SET_DATA_VALUE, payload: { house: value } });
  };
  return (
    <>
      <h2 className="title">ШАГ: {currentStep}</h2>
      <div className="form__group">
        <div className="form__info">Город</div>
        <Input value={city} onChange={handleCity} />
      </div>
      <div className="form__group">
        <div className="form__info">Улица</div>
        <Input value={street} onChange={handleStreet} />
      </div>
      <div className="form__group">
        <div className="form__info">Дом</div>
        <Input value={house} onChange={handleHouse} />
      </div>
      <div className="button__wrapp">
        <Button onClick={() => dispatch({ type: PREVIOUS_STEP })}>Previous</Button>
        <Button onClick={() => dispatch({ type: NEXT_STEP })}>Next</Button>
      </div>
    </>
  );
};

export default Step2;
