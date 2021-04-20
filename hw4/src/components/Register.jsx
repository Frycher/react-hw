import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Button from './Button';
import Timer from './Timer';
import Notification from './Notification';
import { v1 as uuid } from 'uuid';
import { actionTypes } from '../store/actionTypes';

const mapStateToProps = (store) => {
  const { message, isNotification, newPatriciant, isTimer } = store;
  return {
    message,
    isNotification,
    newPatriciant,
    isTimer,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { ADD_NEW_PARTICIANT, SET_IS_SHOW_TIMER, SET_IS_SHOW_NOTIFICATION, SET_MESSAGE } = actionTypes;
  return {
    setNewPaticiant: (id, name, secondName) => {
      dispatch({ type: ADD_NEW_PARTICIANT, payload: { id, name, secondName } });
    },
    setIsShowTimer: () => {
      dispatch({ type: SET_IS_SHOW_TIMER });
    },
    setIsNotification: (noty) => {
      dispatch({ type: SET_IS_SHOW_NOTIFICATION, payload: !noty });
    },
    setMessage: (message) => {
      dispatch({ type: SET_MESSAGE, payload: message });
    },
  };
};

const Register = (props) => {
  const { message, isNotification, isTimer, setNewPaticiant, setIsShowTimer, setIsNotification, setMessage } = props;

  const handleRegister = (e) => {
    e.preventDefault();
    const { firstName, secondName } = e.target.elements;
    const regexp = /[a-z]|[а-я]/i;
    const fName = firstName.value.trim();
    const sName = secondName.value.trim();
    let messageValue = '';
    if (!fName || !sName) {
      messageValue = 'Заполните все поля';
      setIsNotification(isNotification);
      setMessage(messageValue);
      return
    }
    if (!regexp.test(String(fName)) || !regexp.test(String(sName))) {
      messageValue = 'В поле должна быть хотя бы одна буква';
      setIsNotification(isNotification);
      setMessage(messageValue);
      return
    }
    firstName.value = '';
    secondName.value = '';
    const id = uuid();
    setNewPaticiant(id, fName, sName);
    setIsShowTimer();
  };

  return (
    <>
      <form className="form" onSubmit={handleRegister}>
        <h2 className="form__title">Registration User</h2>
        <div className="form__group">
          First name:
          <Input name="firstName" placeholder="Enter first name" />
        </div>
        <div className="form__group">
          Second name:
          <Input name="secondName" placeholder="Enter second name" />
        </div>
        <Button>Register particiant</Button>
      </form>
      {isNotification && <Notification>{message}</Notification>}
      {isTimer && <Timer />}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
