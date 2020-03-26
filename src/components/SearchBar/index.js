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

TopBar.propTypes = {
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
  isLoading: PropTypes.bool.isRequired,
  updateWeatherAsync: PropTypes.func.isRequired
};

export default TopBar;
