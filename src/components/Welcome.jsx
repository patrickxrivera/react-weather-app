import React from 'react';
import styled from 'styled-components';
import SearchContainer from './SearchContainer.jsx';
import { fadeInUp } from '../styles/styles.jsx';

function Welcome() {
  return (
    <Container>
      <Header>
        Weather Info For Your Favorite Cities
      </Header>
      <Subscript>
        Never have an unprepared day.
      </Subscript>
      <SearchContainer />
    </Container>
  )
}

const Container = styled.div`
  margin: 7rem auto;
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
