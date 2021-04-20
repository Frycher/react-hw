import React from 'react';
import './App.css';
import Input from './components/Input';
// import Button from './components/Button';
import Card from './components/UserCard';
import WinnerWindow from './components/WinnerWindow';
import Register from './components/Register';
import { connect } from 'react-redux';
import { actionTypes } from './store/actionTypes';

const mapStateToProps = (store) => {
  const { particiantList, testarr } = store;
  return {
    particiantList,
    testarr,
  };
};
const mapDispatchToProps = (dispatch) => {
  const { SEARCH_PARTICIANT } = actionTypes;
  return {
    searchedValue: (value) => {
      dispatch({ type: SEARCH_PARTICIANT, payload: value });
    },
  };
};

const App = (props) => {
  const { particiantList, testarr, searchedValue } = props;
  const handleSearch = (e) => {
    const value = e.target.value.trim().toLowerCase();
    searchedValue(value);
  };
  return (
    <div className="App">
      <div className="left-col">
        <Input placeholder="Enter particiant name..." onChange={handleSearch} />
        <div className="card__list">
          {testarr.map((item, i) => {
            return <Card cardItemProps={item} key={i} />;
          })}
        </div>
      </div>
      <div className="right-col">
        <Register />
        <WinnerWindow />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
