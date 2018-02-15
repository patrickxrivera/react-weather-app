import React from 'react';
import { Cloud, Sun } from 'react-feather';

function ForecastCard() {
  return (
    <section className = 'HourlyForecast__container-main'>
      <div className = 'ForecastCard__container'>
        <div className = 'ForecastCard__time'>3pm</div>
        <div><Sun className="ForecastCard__icon" size={90}/></div>
        <div className='ForecastCard__temp'>72&deg;</div>
      </div>
      <div className = 'ForecastCard__container'>
        <div className = 'ForecastCard__time'>3pm</div>
        <div><Sun className="ForecastCard__icon" size={90}/></div>
        <div className='ForecastCard__temp'>72&deg;</div>
      </div>
      <div className = 'ForecastCard__container'>
        <div className = 'ForecastCard__time'>3pm</div>
        <div><Sun className="ForecastCard__icon" size={90}/></div>
        <div className='ForecastCard__temp'>72&deg;</div>
      </div>
      <div className = 'ForecastCard__container'>
        <div className = 'ForecastCard__time'>3pm</div>
        <div><Sun className="ForecastCard__icon" size={90}/></div>
        <div className='ForecastCard__temp'>72&deg;</div>
      </div>
    </section>
  )
}

export default ForecastCard;
