import React from 'react';
import PropTypes from 'prop-types';
import ForecastCard from './ForecastCard';
import helpers from '../utils/helpers';

const ForecastContainer = (props) => {
  const forecasts = props.forecasts;

  return (
    <section className = 'Forecast__container-content'>
      {forecasts.map((forecast) => {
        const time = helpers.getDay(forecast.dt);
        const temp = Math.round(forecast.temp.day);

        return (
          <ForecastCard
            time={time}
            icon='Sun'
            temp={temp}
          />
        )
      })}
    </section>
  )
}

ForecastContainer.propTypes =
  {
    hourlyForecasts: PropTypes.array.isRequired,
  }

export default ForecastContainer;
