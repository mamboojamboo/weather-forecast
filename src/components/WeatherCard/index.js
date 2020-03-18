import React from 'react';

import { CardWrapper, CardTitle } from './units';
import LoadingProgress from '../LoadingProgress';

const WeatherCard = ({ weather, isLoading }) => (

  <CardWrapper>

    <LoadingProgress {...{ isLoading }}/>

    <CardTitle>{weather.city}</CardTitle>
    <i className={`wi ${weather.weatherIcon}`}/>

    { weather.tempCelsius ? (<h1>{weather.tempCelsius}&deg;</h1>) : null}

    {weather.tempMin && weather.tempMax
      ? (<h3>
          <span>{weather.tempMin}&deg;</span>
          <span>{weather.tempMax}&deg;</span>
        </h3>)
      : null}

    <h4>{weather.description}</h4>
  </CardWrapper>

);

export default WeatherCard;
