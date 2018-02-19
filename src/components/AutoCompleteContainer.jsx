import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function AutoCompleteContainer(props) {

  return (
    <Container>
      <ListContainer>
        {props.cities.map((city) => {
          return <City key={city}>{city}</City>
        })}
      </ListContainer>
    </Container>
  )
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

const City = styled.li`
  color: black;
  list-style-type: none;
  padding: 0.5rem 0;
  padding-left: 42px;
  width: 466px;
  &:hover {
    background-color: #ecf0f1;
  }
`

AutoCompleteContainer.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default AutoCompleteContainer;
