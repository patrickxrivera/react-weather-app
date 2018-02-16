import React from 'react';
import PropTypes from 'prop-types';

function ForecastCard(props) {
  const WeatherIcon = props.icon;

  return (
      <div className = 'ForecastCard__container' key = {props.time}>
        <div className = 'ForecastCard__time'>{props.time}</div>
        <div>
          <WeatherIcon
            className = 'ForecastCard__icon'
            size={90}
          />
        </div>
        <div className = 'ForecastCard__temp'>{props.temp}&deg;</div>
      </div>
  )
}

ForecastCard.propTypes =
  {
    time: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    temp: PropTypes.number.isRequired,
  }

export default ForecastCard;
