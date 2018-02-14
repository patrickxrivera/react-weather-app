import React from 'react';
import { Sun } from 'react-feather';

function CurrentWeather() {
  return (
    <div className='CurrentWeather__container-main'>
      <div className='CurrentWeather__container-content'>
        <div className='CurrentWeather__top'>
          <div>
            <Sun size={100}/>
          </div>
          <span className='CurrentWeather__temp-main'>65&deg;</span>
        </div>
        <div className='CurrentWeather__description'>
          Windy, chance of a few late night showers. Lows overnight in the mid 50s.
        </div>
        <div className='CurrentWeather__bottom'>
          High: 76&deg; / Low: 45&deg;
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather;
