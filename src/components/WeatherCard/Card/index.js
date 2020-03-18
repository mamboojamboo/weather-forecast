import React from 'react';

import {
  Wrapper, City, WeatherIcon, TempCelsius, TempMinMax, Description
} from './units';

const Card = ({ weather, isLoading }) => (
    <Wrapper {...{ isLoading }}>

      <City city={weather.city}>{weather.city}</City>

      <WeatherIcon icon={weather.weatherIcon}>
      <i className={`wi ${weather.weatherIcon}`}/>
      </WeatherIcon>

      <TempCelsius tempCelsius={weather.tempCelsius}>
        { weather.tempCelsius}&deg;
      </TempCelsius>

      <TempMinMax tempMin={weather.tempMin} tempMax={weather.tempMax}>
        {weather.tempMin}&deg; - {weather.tempMax}&deg;
      </TempMinMax>

      <Description description={weather.description}>
      {weather.description}
      </Description>

    </Wrapper>
);
export default Card;
