import React from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import api from '../utils/api';
import helpers from '../utils/helpers';
import HourlyForecast from './HourlyForecast';

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
      hourlyForecasts: null,
      selected: 'current weather',
      container: 'CurrentWeather__container',
    };

    this.updateCurrentWeather = this.updateCurrentWeather.bind(this);
    this.updateCurrentTime = this.updateCurrentTime.bind(this);
    this.updateHourlyForecasts = this.updateHourlyForecasts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.updateCurrentWeather();
    this.updateCurrentTime();
    this.updateHourlyForecasts();
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

  updateHourlyForecasts() {
    api
    .fetchHourlyForecasts()
    .then((hourlyForecasts) => {
      this.setState(() => {
        return { hourlyForecasts }
      });
    });
  }

  handleClick(selected) {
    this.setState(() => {
      const containerStyles =
      {
        'current weather': 'CurrentWeather__container',
        'hourly forecast': 'HourlyForecast__container',
        'daily forecast': 'DailyForecast__container',
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
    const hourlyForecasts = this.state.hourlyForecasts;
    const selected = this.state.selected;
    const container = this.state.container;

    return (
      <div className = {container}>
        <div>
          <Header
            city = {city}
            time = {time}
            onClick = {this.handleClick}
          />
        </div>
        <div>
          {selected === 'current weather' &&
            <CurrentWeather
              currentTemp = {currentTemp}
              high = {high}
              low = {low}
              wind = {wind}
              clouds = {clouds}
              description = {description}
            />
          }
          {selected === 'hourly forecast' &&
            <HourlyForecast
              hourlyForecasts = {hourlyForecasts}
            />
          }
        </div>
      </div>
    )
  }
}

export default Results;
