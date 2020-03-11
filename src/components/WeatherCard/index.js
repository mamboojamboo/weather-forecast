import React from 'react';
import { useValues, useActions } from 'kea';

import appLogic from '../../store/appLogic';

function minMaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span>{min}&deg;</span>
        <span>{max}&deg;</span>
      </h3>
    );
  }
}

const WeatherCard = () => {
  const { weather, isLoading } = useValues(appLogic);
  const { updateWeatherAsync } = useActions(appLogic);

  return (
    isLoading ? 'Loading data...' : (<div className='weather-card'>
      <h1>
        {weather.city}
      </h1>
      <i className={`wi ${weather.weatherIcon}`}/>

      { weather.tempCelsius ? (<h1>{weather.tempCelsius}&deg;</h1>) : null}

      {minMaxTemp(weather.tempMin, weather.tempMax)}
      <h4>{weather.description}</h4>
    </div>)

  );
};

export default WeatherCard;
