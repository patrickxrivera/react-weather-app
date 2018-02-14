import React from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';

class Body extends React.Component {
  render() {
    return (
      <div className='Body__container'>
        <div>
          <Header />
        </div>
        <div>
          <CurrentWeather />
        </div>
      </div>
    )
  }
}

export default Body;
