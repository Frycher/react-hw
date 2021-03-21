import React, { useContext } from 'react';
import { actionTypes } from '../store/actionTypes';
import { MyContext } from '../store/context';
import Input from './Input';
import Button from './Button';
import Notification from './Notification';

const Step4 = (props) => {
  const { state, dispatch } = useContext(MyContext);
  const { currentStep, password, confirmPassword, isNotification, message } = state;
  const { NEXT_STEP, PREVIOUS_STEP, SET_DATA_VALUE } = actionTypes;

  const handlePassword = (e) => {
    const value = e.target.value;
    dispatch({ type: SET_DATA_VALUE, payload: { password: value } });
  };
  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    dispatch({ type: SET_DATA_VALUE, payload: { confirmPassword: value } });
  };
  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      let errorText = 'Пароль не может быть пустым';
      dispatch({ type: SET_DATA_VALUE, payload: { isNotification: true } });
      dispatch({ type: SET_DATA_VALUE, payload: { message: errorText } });
      return false;
    } else if (password !== confirmPassword) {
      let errorText = 'Пароли должны совпадать';
      dispatch({ type: SET_DATA_VALUE, payload: { isNotification: true } });
      dispatch({ type: SET_DATA_VALUE, payload: { message: errorText } });
      return false;
    }
    dispatch({ type: NEXT_STEP });
  };

  return (
    <>
      {isNotification && <Notification>{message}</Notification>}
      <h2 className="title">ШАГ: {currentStep}</h2>
      <div className="form__group">
        <div className="form__info">Пароль</div>
        <Input value={password} onChange={handlePassword} />
      </div>
      <div className="form__group">
        <div className="form__info">Подтвердите пароль</div>
        <Input value={confirmPassword} onChange={handleConfirmPassword} />
      </div>
      <div className="button__wrapp">
        <Button onClick={() => dispatch({ type: PREVIOUS_STEP })}>Previous</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </>
  );
};

export default Step4;
