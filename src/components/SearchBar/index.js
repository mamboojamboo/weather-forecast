import React from 'react';

import {
  SearchForm,
  FieldWrapper,
  FieldTitle,
  ErrorMessage,
  FieldInput,
  Button
} from './units';

const TopBar = ({ weather, isLoading, updateWeatherAsync }) => (
    <SearchForm onSubmit={updateWeatherAsync}>

      <FieldWrapper>
        <FieldTitle>
          City:
          {weather.error.city
            ? <ErrorMessage>&nbsp;{weather.error.city}</ErrorMessage>
            : null}
        </FieldTitle>

        <FieldInput
          type='text'
          name='inputCity'
          autoComplete='off'
          placeholder='London'
          defaultValue={weather.city}
        />
      </FieldWrapper>

      <FieldWrapper>
        <FieldTitle>
          Country:
          {weather.error.country
            ? <ErrorMessage>&nbsp;{weather.error.country}</ErrorMessage>
            : null}
        </FieldTitle>

        <FieldInput
          type='text'
          name='inputCountry'
          autoComplete='off'
          placeholder='UK'
          defaultValue={weather.country}
        />
      </FieldWrapper>

      <Button
        disabled={isLoading}
      >
        Get weather
      </Button>
    </SearchForm>
);

export default TopBar;
