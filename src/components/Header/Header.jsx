import React from 'react';
import './header.css';

const Header = ({ handleSearch, handleSort, handleReset }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="block">
          <input className="search" type="text" onChange={handleSearch} placeholder="search" />

          <select id="select" className="select" onChange={handleSort}>
            <option value="none">None</option>
            <option value="asc">Ascending age</option>
            <option value="desc">Descending age</option>
          </select>
        </div>
          <button onClick={handleReset} className="btn_reset">Reset</button>
      </div>
    </header>
  );
};
export default Header;
