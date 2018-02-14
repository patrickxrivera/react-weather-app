import React from 'react';
import Nav from './Nav';
import Header from './Header'

class App extends React.Component {
  render() {
    return (
      <div className='App__container'>
        <div className='Nav'><Nav /></div>
        <div><Header /></div>
      </div>
    )
  }
}

export default App;
