import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className='Nav__container'>
      <NavLink to='/' className='Nav__header'>
        Weather.io
      </NavLink>
      <ul className='Nav__list'>
        <NavLink to='/' className='Nav__home'>Home</NavLink>
        <li>Sign In</li>
        <li className='Nav__button'>Sign Up Free</li>
      </ul>
    </div>
  )
}

export default Nav;
