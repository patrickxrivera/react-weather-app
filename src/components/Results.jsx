import React from 'react';
import Header from './Header.jsx';
import CurrentWeather from './CurrentWeather.jsx';
import ForecastsContainer from './ForecastsContainer.jsx';
import styled, { keyframes } from 'styled-components';

function Results(props) {
  return (
    <ResultsCard selected={props.selected}>
      <div>
        <Header city={props.city} time={props.time} onClick={props.handleClick} selected={props.selected} />
      </div>
      <div>
        {props.selected === 'current weather' && (
          <CurrentWeather
            currentTemp={props.currentTemp}
            high={props.high}
            low={props.low}
            wind={props.wind}
            clouds={props.clouds}
            description={props.description}
          />
        )}
        {props.selected === 'forecast' && <ForecastsContainer forecasts={props.forecasts} />}
      </div>
    </ResultsCard>
  );
}

const expand = keyframes`
  from { width: 500px; }
  to { width: 900px; }
`;

const contract = keyframes`
  from { width: 900px; }
  to { width: 500px; }
`;

const ResultsCard = styled.div`
  animation: ${props => (props.selected === 'current weather' ? contract : expand)} 700ms
    cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  margin: 1.5rem auto;
  color: #52565f;
  width: 500px;
`;

export default Results;
