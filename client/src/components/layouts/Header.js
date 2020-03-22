import React from 'react';
import { NavLink } from 'react-router-dom';
import pakistanFlag from '../../images/pakistan-flag.jpg';

const Header = () => {
  return (
    <header>
      <div className='left'>
        <h1>
          <img
            src={pakistanFlag}
            width='75px'
            style={{ marginRight: '10px' }}
            alt=''
          />
          <span>PAKISTAN COVID 19</span>
        </h1>
      </div>
      <div className='right'>
        <nav>
          <NavLink exact to='/'>
            WorldOMeter Data
          </NavLink>
          <NavLink exact to='/jhu-data'>
            JHU Data
          </NavLink>
          <NavLink exact to='/about'>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
