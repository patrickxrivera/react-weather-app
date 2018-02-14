import React from 'react';

function Nav() {
  return (
    <div className='Nav__container'>
      <header className='Nav__header'>
        Weather.io
      </header>
      <ul className='Nav__list'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li className='Nav__sign-in'>Sign In</li>
        <li className='Nav__button'>Sign Up Free</li>
      </ul>
    </div>
  )
}

export default Nav;
