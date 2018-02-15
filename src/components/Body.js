import React from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import api from '../utils/api';
import helpers from '../utils/helpers';

class Body extends React.Component {
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
    };

    this.updateCurrentWeather.bind(this);
    this.updateCurrentTime.bind(this);
    this.updateForecasts.bind(this);
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
    .fetchHourlyForecasts()
    .then((forecasts) => {
      this.setState(() => {
        return { forecasts }
      });
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
    console.log(forecasts);

    return (
      <div className='Body__container'>
        <div>
          <Header
            city = {city}
            time = {time}
          />
        </div>
        <div>
          <CurrentWeather
            currentTemp = {currentTemp}
            high = {high}
            low = {low}
            wind = {wind}
            clouds = {clouds}
            description = {description}
          />
        </div>
      </div>
    )
  }
}

export default Body;
