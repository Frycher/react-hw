import React from 'react';
import { actionTypes } from '../store/actionTypes';
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  const { isNotification } = store;
  return {
    isNotification,
  };
};
const mapDispatchToProps = (dispatch) => {
  const { SET_IS_SHOW_NOTIFICATION } = actionTypes;
  return {
    isShowNotification: (noty) => {
      dispatch({ type: SET_IS_SHOW_NOTIFICATION, payload: !noty });
    },
  };
};

const Notification = (props) => {
  const { isNotification, isShowNotification } = props;

  let timerID = null;
  timerID = setTimeout(() => {
    isShowNotification(isNotification);

    clearTimeout(timerID);
  }, 2000);

  return <div className="notif">{props.children}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
