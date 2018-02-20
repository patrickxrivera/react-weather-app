import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Header(props) {
  const handleClick = selected => {
    props.onClick(selected);
  };

  return (
    <div className="Header__container">
      <div className="Header__list">
        <div className="Header__location-and-date-area">
          <li className="Header__location">{props.city}</li>
          <li className="Header__date">{props.time}</li>
        </div>
        <div className="Header__weather-options-area">
          <div className="Header__current--container bottom">
            <HeaderCurrent selected={props.selected} onClick={handleClick.bind(null, 'current weather')}>
              Current
            </HeaderCurrent>
          </div>
          <div className="Header__forecast--container">
            <HeaderForecast selected={props.selected} onClick={handleClick.bind(null, 'forecast')}>
              5-day
            </HeaderForecast>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  city: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
};

const HeaderCurrent = styled.li`
  opacity: ${props => (props.selected === 'current weather' ? 1 : 0.4)};
`;

const HeaderForecast = styled.li`
  opacity: ${props => (props.selected === 'forecast' ? 1 : 0.4)};
`;

export default Header;
