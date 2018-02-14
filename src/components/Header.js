import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='Header__container'>
        <div className='Header__list'>
          <div className='Header__location-and-date-area'>
            <li className='Header__location'>Jacksonville, FL</li>
            <li className='Header__date'>February 14th, 2018</li>
          </div>
          <div className='Header__weather-options-area'>
            <li>Current</li>
            <li>7-hour</li>
            <li>10-day</li>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
