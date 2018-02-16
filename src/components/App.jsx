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
import Results from './Results.jsx';

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
