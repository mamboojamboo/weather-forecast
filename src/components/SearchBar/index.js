import React from 'react';

import {
  BarForm,
  InputInBarForm,
  ButtonInBarForm
} from './units';

const TopBar = ({ weather, isLoading, updateWeatherAsync }) => (
    <BarForm onSubmit={updateWeatherAsync}>
      <InputInBarForm
        type='text'
        name='inputCity'
        autoComplete='off'
        placeholder={!weather.error ? 'city' : 'enter city'}
        defaultValue={weather.city}
      />
      <InputInBarForm
        type='text'
        name='inputCountry'
        autoComplete='off'
        placeholder={!weather.error ? 'country' : 'enter country'}
        defaultValue={weather.country}
      />
      <ButtonInBarForm
        disabled={isLoading}
      >
        Get weather
      </ButtonInBarForm>
    </BarForm>
);

export default TopBar;
