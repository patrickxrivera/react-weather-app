import React from 'react';
import {
         BrowserRouter as
         Router,
         Route,
         Switch
       }
from "react-router-dom";
import Welcome from './Welcome.jsx';
import Nav from './Nav.jsx';
import ResultsContainer from './ResultsContainer.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App__container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route exact path='/results' component={ResultsContainer} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
