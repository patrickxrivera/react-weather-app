import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.setState =
    {
        selected: null,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selected) {
    this.props.onClick(selected);
  }

  render() {
    return (
      <div className='Header__container'>
        <div className='Header__list'>
          <div className='Header__location-and-date-area'>
            <li className='Header__location'>{this.props.city}, FL</li>
            <li className='Header__date'>{this.props.time}</li>
          </div>
          <div className='Header__weather-options-area'>
            <li
              className='Header__current on'
              onClick={this.handleClick.bind(null, 'current weather')}>
              Current
            </li>
            <li
              className='Header__hour off'
              onClick={this.handleClick.bind(null, 'hourly forecast')}>
              12-hour
            </li>
            <li
              className='Header__day off'
              onClick={this.handleClick.bind(null, 'daily forecast')}>
              5-day
            </li>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes =
{
  city: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Header;
