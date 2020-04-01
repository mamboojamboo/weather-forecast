import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SearchForm,
  FieldWrapper,
  FieldTitle,
  ErrorMessage,
  FieldInput,
  Button
} from './units';

const SearchBar = ({ weather, isLoading, updateWeatherAsync }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  console.log('isSearchOpen', isSearchOpen)
  return (
    <SearchForm onSubmit={updateWeatherAsync}>

      <FieldWrapper isSearchOpen>
        <FieldTitle>
          City:
          <ErrorMessage error={weather.error.city}>&nbsp;{weather.error.city}</ErrorMessage>
        </FieldTitle>

        <FieldInput
          type='text'
          name='inputCity'
          autoComplete='off'
        />
      </FieldWrapper>

      <FieldWrapper isSearchOpen>
        <FieldTitle>
          Country:
          <ErrorMessage error={weather.error.country}>&nbsp;{weather.error.country}</ErrorMessage>
        </FieldTitle>

        <FieldInput
          type='text'
          name='inputCountry'
          autoComplete='off'
        />
      </FieldWrapper>

      <Button
        disabled={isLoading}
      >
        Get weather
      </Button>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
    icon: PropTypes.string,
    temp: PropTypes.string,
    tempMin: PropTypes.string,
    tempMax: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  updateWeatherAsync: PropTypes.func.isRequired
};

export default SearchBar;
