import React, { useContext } from 'react';
import { actionTypes } from '../store/actionTypes';
import { MyContext } from '../store/context';

const Notification = (props) => {
  const { state, dispatch } = useContext(MyContext);
  const { isNotification } = state;
  const { SET_DATA_VALUE } = actionTypes;

  let timerID = null;
  timerID = setTimeout(() => {
    dispatch({ type: SET_DATA_VALUE, payload: { isNotification: false } });
    clearTimeout(timerID);
  }, 2000);

  return <div className="notif">{props.children}</div>;
};

export default Notification;
