import React from 'react';
import {
         BrowserRouter as
         Router,
         Route,
         Switch
       }
from "react-router-dom";
import Welcome from './Welcome';
import Nav from './Nav';
import Results from './Results';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App__container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/results' component={Results} />
            <Route exact path='/results/current' component={CurrentWeather} />
            <Route exact path='/results/hourly-forecast' component={HourlyForecast} />
            <Route exact path='/results/daily-forecast' component={DailyForecast} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
