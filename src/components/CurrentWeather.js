import React from 'react';
import { Sun } from 'react-feather';
import PropTypes from 'prop-types';

function CurrentWeather(props) {
  return (
    <div className='CurrentWeather__container-main'>
      <div className='CurrentWeather__container-content'>
        <div className='CurrentWeather__top'>
          <div>
            <Sun size={100}/>
          </div>
          <span className='CurrentWeather__temp-main'>{props.currentTemp}&deg;</span>
        </div>
        <div className='CurrentWeather__description'>
          Windy, chance of a few late night showers. Lows overnight in the mid 50s.
        </div>
        <div className='CurrentWeather__bottom'>
          High: {props.high}&deg; / Low: {props.low}&deg;
        </div>
      </div>
    </div>
  )
}

CurrentWeather.propTypes =
{
  currentTemp: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
}

export default CurrentWeather;
