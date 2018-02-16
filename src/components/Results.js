import React from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import ForecastContainer from './ForecastContainer';
import api from '../utils/api';
import helpers from '../utils/helpers';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      time: null,
      currentTemp: null,
      high: null,
      low: null,
      wind: null,
      clouds: null,
      description: null,
      forecasts: null,
      selected: 'current weather',
      container: 'CurrentWeather__container',
    };

    this.updateCurrentWeather = this.updateCurrentWeather.bind(this);
    this.updateCurrentTime = this.updateCurrentTime.bind(this);
    this.updateForecasts = this.updateForecasts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.updateCurrentWeather();
    this.updateCurrentTime();
    this.updateForecasts();
  }

  updateCurrentWeather() {
    api
    .fetchCurrentWeather()
    .then((response) => {
      const [city, currentTemp, high, low, wind, clouds, description] = response;
      this.setState(() => {
        return (
          {
            city,
            currentTemp,
            high,
            low,
            wind,
            clouds,
            description,
          }
        )
      });
    });
  }

  updateCurrentTime() {
    const time = helpers.getCurrentTime();
    this.setState(() => {
      return { time }
    });
  }

  updateForecasts() {
    api
    .fetchForecasts()
    .then((forecasts) => {
      this.setState(() => {
        return { forecasts }
      });
    });
  }

  handleClick(selected) {
    this.setState(() => {
      const containerStyles =
      {
        'current weather': 'CurrentWeather__container',
        'forecast': 'Forecast__container',
      }

      return (
        {
          selected,
          container: containerStyles[selected]
        }
      )
    });
  }

  render() {
    const city = this.state.city;
    const time = this.state.time;
    const currentTemp = this.state.currentTemp;
    const high = this.state.high;
    const low = this.state.low;
    const wind = this.state.wind;
    const clouds = this.state.clouds;
    const description = this.state.description;
    const forecasts = this.state.forecasts;
    const selected = this.state.selected;
    const container = this.state.container;

    return (
      <div className = {container}>
        <div>
          <Header
            city={city}
            time={time}
            onClick={this.handleClick}
            selected={selected}
          />
        </div>
        <div>
          {selected === 'current weather' &&
            <CurrentWeather
              currentTemp={currentTemp}
              high={high}
              low={low}
              wind={wind}
              clouds={clouds}
              description={description}
            />
          }
          {selected === 'forecast' &&
            <ForecastContainer
              forecasts={forecasts}
            />
          }
        </div>
      </div>
    )
  }
}

export default Results;
