import React from 'react';
import Nav from './Nav';
import Body from './Body';

class App extends React.Component {
  render() {
    return (
      <div className='App__container'>
        <div className='Nav'>
          <Nav />
        </div>
        <div>
          <Body />
        </div>
      </div>
    )
  }
}

export default App;
