import React from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';
import { Link, Redirect } from 'react-router-dom';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      fireRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    this.setState(() => {
      return { fireRedirect: true }
    });
  }

  handleChange(e) {
    const city = e.target.value;

    this.setState(() => {
      return { city }
    });
  }

  render() {
    const city = this.state.city;
    const fireRedirect = this.state.fireRedirect;

    return (
      <div>
        <Container onSubmit={this.handleSubmit}>
          <Link to={{
              pathname: '/results',
              state: { city },
          }}>
            <SearchIcon />
          </Link>
          <Input
            type="text"
            placeholder="Enter your favorite city"
            onChange={this.handleChange}
            autofocus
          />
        </Container>
        {fireRedirect &&
          <Redirect to={{
             pathname: '/results',
             state: { city }
          }}/>
         }
      </div>
    )
  }
}

const Container = styled.form`
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
  cursor: pointer;
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
