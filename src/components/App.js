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

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App__container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/results' component={Results} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
