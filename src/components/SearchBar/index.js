import React from 'react';
import PropTypes from 'prop-types';

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
          <ErrorMessage error={weather.error.city}>&nbsp;{weather.error.city}</ErrorMessage>
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
          <ErrorMessage error={weather.error.country}>&nbsp;{weather.error.country}</ErrorMessage>
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

TopBar.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.number,
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
  isLoading: PropTypes.bool.isRequired,
  updateWeatherAsync: PropTypes.func.isRequired
};

export default TopBar;
