import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import helpers from '../utils/helpers';
import { Redirect } from 'react-router-dom';

class AutoCompleteContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: null,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(cityAndState) {
    const selectedCity = helpers.getCityFrom(cityAndState)
    this.setState(() => {
      return { selectedCity }
    });

    helpers.select(cityAndState);
  }

  render() {
    const results = createResultsHTML(this.props.cities, this.handleClick);
    const selectedCity = this.state.selectedCity;
    const routeData =
      {
        pathname: '/results',
        state: selectedCity,
      };

    return (
      <div>
        <Container>
          <ListContainer>
            {results}
          </ListContainer>
        </Container>
        { selectedCity && <Redirect to={routeData}/> }
      </div>
    )
  }
}

const createResultsHTML = (response, handleClick) => {
  if (helpers.isError(response)) {
    const errorMsg = helpers.createErrorMsg(response)
    return <ListItem> {errorMsg} </ListItem>
  } else {
    const results =
      response.map((city) => {
          return (
            <ListItem
              key={city}
              onClick={() => handleClick(city)}
            >
              {city}
            </ListItem>
          )
      });
      return results;
  }
}

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 0.5px solid #ced6e0;
  border-top: none;
  width: 505px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  background-color: #fff;
  padding: 0.1rem;
  padding-bottom: 0.2rem;
  z-index: -100;
`

const ListContainer = styled.ul`
  padding-left: 0;
  margin: -3px 0;
  margin-left: -2px;
}`

const ListItem = styled.li`
  color: black;
  list-style-type: none;
  padding: 0.5rem 0;
  padding-left: 42px;
  width: 466px;
  cursor: pointer;
  &:hover {
    background-color: #ecf0f1;
  }
`

AutoCompleteContainer.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default AutoCompleteContainer;
