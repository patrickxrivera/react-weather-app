import React from 'react';
import { Cloud, Sun } from 'react-feather';
import PropTypes from 'prop-types';

const ForecastCard = (props) => {
  const ForecastIcon = props.icon;
  return (
      <div className = 'ForecastCard__container'>
        <div className = 'ForecastCard__time'>{props.time}</div>
        <div><Sun className="ForecastCard__icon" size={90}/></div>
        <div className='ForecastCard__temp'>{props.temp}&deg;</div>
      </div>
  )
}

ForecastCard.propTypes =
  {
    time: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.string.isRequired,
  }

export default ForecastCard;
