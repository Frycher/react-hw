import React, { useContext } from 'react';
import { MyContext } from '../store/context';

const Step5 = (props) => {
  const { state } = useContext(MyContext);
  const { name, surname, email, city, street, house, avatar } = state;

  return (
    <>
      <div className="congratz">Спасибо за регистрацию</div>
      {avatar &&  
        <div className="ava">
          <img src={avatar} alt="" />
        </div>
      }

      <div className="contact">Контактная информация</div>
      <div className="col">
        <div>Имя: {name}</div>
        <div>Фамилия: {surname}</div>
        <div>Email: {email}</div>
        <div>Город: {city}</div>
        <div>Улица: {street}</div>
        <div>Дом: {house}</div>
      </div>
    </>
  );
};

export default Step5;
