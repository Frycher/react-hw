import React, { useState } from 'react';
import './App.css';
import { userData } from './userData';
import Card from './components/Card/';
import Header from './components/Header/';

const App = () => {
  const [baseData, setBaseData] = useState(userData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value.trim().toLowerCase();
    setSearchTerm(value);
    console.log(searchTerm);
    const resultSearch = userData.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm);
    });
    setBaseData(resultSearch);
  };
  console.log(searchTerm);

  const handleSort = (e) => {
    const value = e.target.value;
    if (value === 'asc') {
      let arr = [...userData].sort((a, b) => {
        return a.age - b.age;
      });
      setBaseData(arr);
    } else if (value === 'desc') {
      let arr = [...userData].sort((a, b) => {
        return b.age - a.age;
      });
      setBaseData(arr);
    } 
  };
  const handleReset = (e) => {
    setBaseData(userData)
  }

  return (
    <>
      <div className="app__wrapper">
        <Header handleSearch={handleSearch} handleSort={handleSort} handleReset={handleReset} />
        <div className="card__wrapper">
          {baseData.map((item) => {
            return (
              <Card
                key={item._id}
                picture={item.picture}
                name={item.name}
                age={item.age}
                gender={item.gender}
                balance={item.balance}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
