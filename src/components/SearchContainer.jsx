import React from 'react';
import styled from 'styled-components';
import { Search } from 'react-feather';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fireRedirect: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  handleSubmit() {
    this.setState(() => {
      return { fireRedirect: true }
    });
  }

  render() {
    const fireRedirect = this.state.fireRedirect;
    const city = this.props.city;
    const routeData =
      {
        pathname: '/results',
        state: city,
      };

    return (
      <div>
        <Container onSubmit={this.handleSubmit}>
          <Link to={routeData}>
            <SearchIcon />
          </Link>
          <Input
            type="text"
            placeholder="Enter your favorite city"
            onChange={this.handleChange}
            autofocus
          />
        </Container>
        { fireRedirect && <Redirect to={routeData}/> }
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
  border-radius: 2px;
  border: 0.5px solid #ced6e0;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
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

SearchContainer.propTypes = {
  city: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SearchContainer;
