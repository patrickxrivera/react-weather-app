import React from 'react';
import styled from 'styled-components';
import SearchContainer from './SearchContainer.jsx';
import AutoCompleteContainer from './AutoCompleteContainer.jsx';
import { fadeInUp } from '../styles/styles.jsx';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const city = e.target.value;

    this.setState(() => {
      return { city }
    });
  }

  render() {
    const city = this.state.city;

    return (
      <Container>
        <Header>
          Weather Info For Your Favorite Cities
        </Header>
        <Subscript>
          Never have an unprepared day.
        </Subscript>
        <SearchContainer
          city={city}
          onChange={this.handleChange}
        />
        { city &&
          <AutoCompleteContainer city={city} />}
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 4rem auto;
  width: 800px;
  opacity: 0;
  animation: 1200ms ${fadeInUp} 1000ms forwards;
`

const Header = styled.div`
  font-size: 2.5rem;
  text-align: center;
`

const Subscript = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 3rem;
`

export default Welcome;
