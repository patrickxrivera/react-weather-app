import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome.jsx';
import Nav from './Nav.jsx';
import ResultsContainer from './ResultsContainer.jsx';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Nav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/results" component={ResultsContainer} />
          </Switch>
        </AppContainer>
      </Router>
    );
  }
}

const AppContainer = styled.div`
  margin-top: 1rem;
`;

export default App;
