import React, { useContext } from 'react';
import { actionTypes } from '../store/actionTypes';
import { MyContext } from '../store/context';
import Input from './Input';
import Button from './Button';

const Step1 = (props) => {
  const { state, dispatch } = useContext(MyContext);
  const { currentStep, name, surname, email } = state;
  const { NEXT_STEP, SET_DATA_VALUE } = actionTypes;
  const handleFirstStep = () => {
    dispatch({ type: NEXT_STEP });
  };
  const handleName = (e) => {
    const value = e.target.value;
    dispatch({ type: SET_DATA_VALUE, payload: { name: value } });
  };
  const handleSurname = (e) => {
    const value = e.target.value;
    dispatch({ type: SET_DATA_VALUE, payload: { surname: value } });
  };
  const handleEmail = (e) => {
    const value = e.target.value;
    dispatch({ type: SET_DATA_VALUE, payload: { email: value } });
  };
  return (
    <>
      <h2 className="title">ШАГ: {currentStep}</h2>
      <div className="form__group">
        <div className="form__info">Имя</div>
        <Input value={name} onChange={handleName} />
      </div>
      <div className="form__group">
        <div className="form__info">Фамилия</div>
        <Input value={surname} onChange={handleSurname} />
      </div>
      <div className="form__group">
        <div className="form__info">Email</div>
        <Input value={email} onChange={handleEmail} />
      </div>
      <Button onClick={handleFirstStep}>Next</Button>
    </>
  );
};

export default Step1;
