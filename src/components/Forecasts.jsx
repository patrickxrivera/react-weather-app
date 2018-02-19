import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fadeIn } from '../styles/styles.jsx';

function Forecasts(props) {
  const WeatherIcon = props.icon;

  return (
      <Container>
        <div className = 'ForecastCard__time'>{props.time}</div>
        <div>
          <WeatherIcon
            className = 'ForecastCard__icon'
            size={90}
          />
        </div>
        <div className = 'ForecastCard__temp'>{props.temp}&deg;</div>
      </Container>
  )
}

Forecasts.propTypes =
  {
    time: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    temp: PropTypes.number.isRequired,
  }

const Container = styled.div`
  animation: 1200ms ${fadeIn} ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Forecasts;
