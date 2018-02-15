import React from 'react';
import PropTypes from 'prop-types';


function Header(props) {
  console.log(props)
  return (
    <div className='Header__container'>
      <div className='Header__list'>
        <div className='Header__location-and-date-area'>
          <li className='Header__location'>{props.city}, FL</li>
          <li className='Header__date'>{props.time}</li>
        </div>
        <div className='Header__weather-options-area'>
          <li className='on'>Current</li>
          <li className='off'>7-hour</li>
          <li className='off'>10-day</li>
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
