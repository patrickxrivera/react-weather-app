import React from 'react';
import styled from 'styled-components';

class AutoCompleteContainer extends React.Component {
  render() {
    const cities = ['Jacksonville', 'San Francisco', 'Birmingham', 'Alaska', 'Piedmont', 'Orlanger'];

    return (
      <Container>
        <ul>
          {cities.map((city) => {
            return <City>{city}</City>
          })}
        </ul>
      </Container>
    )
  }
}

const Container = styled.div`
margin: -1rem auto 0;
display: flex;
justify-content: flex-start;
align-items: center;
width: 500px;
background-color: #fff;
padding: 0.25rem;
`

const City = styled.li`
  color: black;
  list-style-type: none;
  margin: 1rem 0;
`

export default AutoCompleteContainer;
