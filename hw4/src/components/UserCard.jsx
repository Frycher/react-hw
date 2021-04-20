import React from 'react';
import { connect } from 'react-redux';
import { actionTypes } from '../store/actionTypes';
import Button from './Button';

const mapDispatchToProps = (dispatch) => {
  const { REMOVE_PARTICIANT } = actionTypes;
  return {
    deleteUser: (currentUser) => {
      dispatch({ type: REMOVE_PARTICIANT, payload: currentUser });
    },
  };
};

const UserCard = (props) => {
  const { deleteUser } = props;
  const { id, name, time } = props.cardItemProps;
  const { times } = time;
  const handleDeleteCard = () => {
    deleteUser(props.cardItemProps);
  };
  return (
    <div className="card">
      <div className="card__wrapp">
        <div className="data">
          <b>ID:</b> {id}
        </div>
        <div className="data">
          <b>Name:</b> {name}
        </div>
        <div className="data">
          <b>Time:</b> {times.hours + ':' + times.minute + ':' + times.second}
        </div>
      </div>

      <Button onClick={handleDeleteCard}>Delete</Button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(UserCard);
