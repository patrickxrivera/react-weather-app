import React from 'react';
import PropTypes from 'prop-types';


function Header(props) {

  return (
    <div className='Header__container'>
      <div className='Header__list'>
        <div className='Header__location-and-date-area'>
          <li className='Header__location'>{props.city}, FL</li>
          <li className='Header__date'>{props.time}</li>
        </div>
        <div className='Header__weather-options-area'>
          <li className='Header__current on'>Current</li>
          <li className='Header__hour off'>12-hour</li>
          <li className='Header__day off'>5-day</li>
        </div>
      </div>
    </div>
  )
}

Header.propTypes =
{
  city: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Header;
