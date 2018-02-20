import React from 'react';
import { Sun, ArrowUp, ArrowDown, Wind, Cloud } from 'react-feather';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fadeIn } from '../styles/styles.jsx';

function CurrentWeather(props) {
  return (
    <div className="CurrentWeather__container-main">
      <Container>
        <div className="CurrentWeather__top">
          <div>
            <Sun className="weather-icons CurrentWeather__icon" size={80} />
          </div>
          <span className="CurrentWeather__temp-main">{props.currentTemp}&deg;</span>
        </div>
        <div className="CurrentWeather__description">{props.description}</div>
        <div className="CurrentWeather__bottom">
          <div>
            <li>
              <ArrowUp />
            </li>
            <li className="CurrentWeather__temp-bottom">{props.high}&deg;</li>
          </div>
          <div>
            <li>
              <ArrowDown />
            </li>
            <li className="CurrentWeather__temp-bottom">{props.low}&deg;</li>
          </div>
          <div>
            <li>
              <Wind />
            </li>
            <li>{props.wind}mph</li>
          </div>
          <div>
            <li>
              <Cloud />
            </li>
            <li>{props.clouds}%</li>
          </div>
        </div>
      </Container>
    </div>
  );
}

CurrentWeather.propTypes = {
  currentTemp: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  clouds: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

const Container = styled.div`
  animation: 1000ms ${fadeIn} ease-in;
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CurrentWeather;
