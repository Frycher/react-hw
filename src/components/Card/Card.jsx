import React from 'react';
import './card.css';

const Card = ({ age, balance, gender, name, picture }) => {
  return (
    <div className="card">
      <img src={picture} className="card__image" alt="" />
      <div className="card__name">Name: {name}</div>
      <div className="card__age">Age: {age}</div>
      <div className="card__gender">Gender: {gender}</div>
      <div className="card__balance">Balance: {balance}</div>
    </div>
  );
};
export default Card;
