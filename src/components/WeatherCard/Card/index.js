import React from 'react';
import PropTypes from 'prop-types';
import 'weather-icons/css/weather-icons.css';

import {
  Wrapper, City, WeatherIcon, TempCelsius, TempMinMax, Description
} from './units';

const Card = ({ weather, isLoading }) => (
    <Wrapper {...{ isLoading }}>

      <City city={weather.city}>{weather.city}, {weather.country}</City>

      <WeatherIcon icon={weather.icon}>
        <i className={`wi ${weather.icon}`}/>
      </WeatherIcon>

      <TempCelsius tempCelsius={weather.tempCelsius}>
        { weather.tempCelsius}&deg;
      </TempCelsius>

      <TempMinMax tempCelsiusMin={weather.tempCelsiusMin} tempCelsiusMax={weather.tempCelsiusMax}>
        {weather.tempCelsiusMin}&deg; - {weather.tempCelsiusMax}&deg;
      </TempMinMax>

      <Description description={weather.description}>
        {weather.description}
      </Description>

    </Wrapper>
);

Card.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    icon: PropTypes.string,
    tempCelsius: PropTypes.number,
    tempCelsiusMin: PropTypes.number,
    tempCelsiusMax: PropTypes.number,
    description: PropTypes.string,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  }).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Card;
