import React from 'react';
import
{
  Sun,
  ArrowUp,
  ArrowDown,
  Wind,
  Cloud,
} from 'react-feather';
import PropTypes from 'prop-types';

function CurrentWeather(props) {
  return (
    <div className='CurrentWeather__container-main'>
      <div className='CurrentWeather__container-content'>
        <div className='CurrentWeather__top'>
          <div>
            <Sun size={80}/>
          </div>
          <span className='CurrentWeather__temp-main'>
            {props.currentTemp}&deg;
          </span>
        </div>
        <div className='CurrentWeather__description'>
          {props.description}
        </div>
        <div className='CurrentWeather__bottom'>
          <div>
            <li><ArrowUp /></li>
            <li>{props.high}&deg;</li>
          </div>
          <div>
            <li><ArrowDown /></li>
            <li>{props.low}&deg;</li>
          </div>
          <div>
            <li><Wind /></li>
            <li>{props.wind}mph</li>
          </div>
          <div>
            <li><Cloud /></li>
            <li>{props.clouds}%</li>
          </div>
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
  wind: PropTypes.number.isRequired,
  clouds: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default CurrentWeather;
