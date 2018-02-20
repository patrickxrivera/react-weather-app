import React from 'react';
import styled from 'styled-components';
import SearchContainer from './SearchContainer.jsx';
import AutoCompleteContainer from './AutoCompleteContainer.jsx';
import { fadeInUp } from '../styles/styles.jsx';
import helpers from '../utils/helpers';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputCity: null,
      suggestedCities: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const inputCity = e.target.value;

    this.setState(() => {
      let filteredCities;

      if (inputCity) {
        try {
          filteredCities = helpers.filterCities(inputCity);
        } catch (err) {
          console.warn(err);
          filteredCities = err;
        }
      } else {
        filteredCities = null;
      }

      return {
        inputCity,
        suggestedCities: filteredCities
      };
    });
  }

  render() {
    const inputCity = this.state.inputCity;
    const suggestedCities = this.state.suggestedCities;

    return (
      <Container>
        <Header>Weather Info For Your Favorite Cities</Header>
        <Subscript>Never have an unprepared day.</Subscript>
        <SearchContainer city={inputCity} onChange={this.handleChange} />
        {inputCity && suggestedCities && <AutoCompleteContainer city={inputCity} cities={suggestedCities} />}
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 5rem auto;
  width: 800px;
  opacity: 0;
  animation: 1200ms ${fadeInUp} 400ms forwards;
`;

const Header = styled.div`
  font-size: 2.5rem;
  text-align: center;
`;

const Subscript = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 3rem;
`;

export default Welcome;
