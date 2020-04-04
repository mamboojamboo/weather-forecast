import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  SearchForm, DinamicWrapper, Wrapper, TextField, ErrorMessage, FieldInput, OpenSearch, Button
} from './units';

const SearchBar = ({ weather, isLoading, updateWeatherAsync }) => {
  const [isSearchClosed, setIsSearchClosed] = useState(true);

  const handleOnClick = () => (
    isSearchClosed ? setIsSearchClosed(() => false) : setIsSearchClosed(() => true)
  );

  console.log('isSearchClosed', isSearchClosed);
  return (
    <SearchForm onSubmit={updateWeatherAsync}>
      <DinamicWrapper isSearchClosed={isSearchClosed} error={weather.error}>
        <Wrapper>
          <TextField>
            City:
            <ErrorMessage error={weather.error.city}>&nbsp;{weather.error.city}</ErrorMessage>
          </TextField>

          <FieldInput type='text' name='inputCity' autoComplete='off'/>
        </Wrapper>

        <Wrapper>
          <TextField>
            Country:
            <ErrorMessage error={weather.error.country}>&nbsp;{weather.error.country}</ErrorMessage>
          </TextField>

          <FieldInput type='text' name='inputCountry' autoComplete='off'/>
        </Wrapper>
      </DinamicWrapper>

        <Button type='submit' isSearchClosed={isSearchClosed} disabled={isLoading} onClick={handleOnClick}>
          Get weather
        </Button>

      <OpenSearch type='button' isSearchClosed={isSearchClosed} onClick={handleOnClick}>
        Get weather
      </OpenSearch>
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
