import React from 'react';
import PropTypes from 'prop-types';
import 'weather-icons/css/weather-icons.css';

import {
  Wrapper, City, WeatherIcon, Temp, Date, Description, ColumnWrapper
} from './units';

const Card = ({ weather, isLoading }) => (
    <Wrapper {...{ isLoading }}>

      <Temp temp={weather.temp}>
        { weather.temp}&deg;
      </Temp>

      <ColumnWrapper>
        <City city={weather.city}>{weather.city}, {weather.country}</City>
        <Date>{weather.date}</Date>
      </ColumnWrapper>

      <ColumnWrapper>
        <WeatherIcon icon={weather.icon}>
          <i className={`wi ${weather.icon}`}/>
        </WeatherIcon>

        <Description description={weather.description}>
          {weather.description}
        </Description>
      </ColumnWrapper>

    </Wrapper>
);

Card.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
    icon: PropTypes.string,
    temp: PropTypes.number,
    tempMin: PropTypes.number,
    tempMax: PropTypes.number,
    description: PropTypes.string,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  }).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Card;
