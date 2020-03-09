import React from 'react';
import { useValues, useActions } from 'kea';
import appLogic from '../../logic/appLogic';


import {
  BarForm,
  InputInBarForm,
  ButtonInBarForm
} from './units';

const TopBar = () => {
  const { weather, isLoading } = useValues(appLogic);
  const { updateWeatherAsync } = useActions(appLogic);

  console.log(isLoading);
  console.log(weather);


  return (
    <BarForm onSubmit={(event) => updateWeatherAsync(event)}>
      <InputInBarForm
        type='text'
        name='inputCity'
        autoComplete='off'
        placeholder={!weather.error ? 'city' : 'enter city'}
        // defaultValue={weather.city}
      />
      <InputInBarForm
        type='text'
        name='inputCountry'
        autoComplete='off'
        placeholder={!weather.error ? 'country' : 'enter country'}
        // defaultValue={weather.country}
      />
      <ButtonInBarForm>Get weather</ButtonInBarForm>
    </BarForm>
  );
};

export default TopBar;
