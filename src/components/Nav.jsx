import React from 'react';
import { NavLink } from 'react-router-dom';
import { fadeIn } from '../styles/styles.jsx';
import styled from 'styled-components';

function Nav() {
  return (
    <Container>
      <NavLink to="/" className="Nav__header">
        Weather.io
      </NavLink>
      <ul className="Nav__list">
        <NavLink to="/" className="Nav__home">
          Home
        </NavLink>
        <li>Sign In</li>
        <li className="Nav__button">Sign Up Free</li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.3rem auto;
  padding: 0 3.5rem;
  align-items: center;
  opacity: 0;
  animation: 1000ms ${fadeIn} ease-in 600ms forwards;
`;

export default Nav;
