import React from 'react';
import PropTypes from 'prop-types';
import ForecastCard from './ForecastCard.jsx';
import helpers from '../utils/helpers';
import
  {
    CloudLightning,
    CloudDrizzle,
    CloudRain,
    Sun,
    CloudSnow,
    Cloud,
  }
from 'react-feather';

const ForecastContainer = (props) => {
  const forecasts = props.forecasts;

  return (
    <section className = 'Forecast__container-content'>
      {forecasts.map((forecast) => {
        const time = helpers.getDay(forecast.dt);
        const icon = iconComponents[forecast.weather[0].main];
        const temp = Math.round(forecast.temp.day);

        return (
          <ForecastCard
            time={time}
            icon={icon}
            temp={temp}
          />
        )
      })}
    </section>
  )
}

const iconComponents =
  {
    Thunderstorm: CloudLightning,
    Drizzle: CloudDrizzle,
    Rain: CloudRain,
    Clear: Sun,
    Snow: CloudSnow,
    Clouds: Cloud,
  }

ForecastContainer.propTypes = {
  forecasts: PropTypes.array.isRequired,
}

export default ForecastContainer;
