import React from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';

class SearchContainer extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <SearchIcon />
        </div>
        <Input
          type="text"
          placeholder="Enter your favorite city"
          autofocus
        />
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 3.75rem auto 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  height: 2.5rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: rgba(23,43,99,0.26) 0 7px 42px;
  padding: 0.25rem;
  z-index: 100;
`

const SearchIcon = styled(Search)`
  stroke: #7f8c8d;
  margin-top: .3rem;
  margin-left: .4rem;
`

const Input = styled.input`
  min-width: 450px;
  border: none;
  height: 28px;
  padding-left: .6rem;
  outline: none;
  font: inherit;
`

export default SearchContainer;
