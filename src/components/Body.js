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
      currentTemp: null,
      high: null,
      low: null,
      time: null,
    };

    this.updateCurrentWeather.bind(this);
    this.updateCurrentTime.bind(this);
  }

  componentDidMount() {
    this.updateCurrentWeather();
    this.updateCurrentTime();
  }

  updateCurrentWeather() {
    api
    .fetchCurrentWeather(this.state.city)
    .then((response) => {
      const [city, currentTemp, high, low] = response;
      this.setState(() => {
        return (
          {
            city,
            currentTemp,
            high,
            low,
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

  render() {
    const city = this.state.city;
    const time = this.state.time;
    const currentTemp = this.state.currentTemp;
    const high = this.state.high;
    const low = this.state.low;

    return (
      <div className='Body__container'>
        <div>
          <Header
            city={city}
            time={time}
          />
        </div>
        <div>
          <CurrentWeather
            currentTemp={currentTemp}
            high={high}
            low={low}
          />
        </div>
      </div>
    )
  }
}

export default Body;
