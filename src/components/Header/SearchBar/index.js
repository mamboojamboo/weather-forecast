import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SearchForm,
  DinamicWrapper,
  Wrapper,
  TextField,
  FieldInput,
  SubmitButton,
  OpenSearchButton
} from './units';

const SearchBar = ({ weather, isLoading, updateWeatherAsync }) => {
  const [isSearchClosed, setIsSearchClosed] = useState(true);

  const handleOnClick = () => (
    weather.error
      ? isSearchClosed
      : isSearchClosed ? setIsSearchClosed(() => false) : setIsSearchClosed(() => true)
  );

  console.log(isSearchClosed);
  return (
    <SearchForm onSubmit={updateWeatherAsync}>
      <DinamicWrapper isSearchClosed={isSearchClosed} error={weather.error}>
        <Wrapper>
          <TextField error={weather.error}>
            {!weather.error.city ? 'City:' : weather.error.city}
          </TextField>

          <FieldInput
            type='text'
            name='inputCity'
            autoComplete='off'
            defaultValue=''/>
        </Wrapper>

        <Wrapper>
          <TextField error={weather.error}>
            {!weather.error.city ? 'Country:' : weather.error.country}
          </TextField>

          <FieldInput
            type='text'
            name='inputCountry'
            autoComplete='off'
            defaultValue=''/>
        </Wrapper>
      </DinamicWrapper>

      <SubmitButton
        type='submit'
        isSearchClosed={isSearchClosed}
        disabled={isLoading}
        onClick={handleOnClick}>
        Get weather
      </SubmitButton>

      <OpenSearchButton
        type='button'
        isSearchClosed={isSearchClosed}
        onClick={handleOnClick}>
        Get weather
      </OpenSearchButton>
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
