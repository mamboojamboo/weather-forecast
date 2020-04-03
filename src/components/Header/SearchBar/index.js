import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  TestDiv, SearchForm, Wrapper, TextField, ErrorMessage, FieldInput, OpenSearch, Button
} from './units';

const SearchBar = ({ weather, isLoading, updateWeatherAsync }) => {
  const [isSearchClosed, setIsSearchClosed] = useState(true);

  const handleOnClick = () => (
    isSearchClosed ? setIsSearchClosed(() => false) : setIsSearchClosed(() => true)
  );

  console.log('isSearchClosed', isSearchClosed);
  return (
    <div>
      <SearchForm isSearchClosed={isSearchClosed} onSubmit={updateWeatherAsync}>
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

        <Button type='submit' disabled={isLoading}>
          Get weather
        </Button>
      </SearchForm>


      <OpenSearch type='button' isSearchClosed={isSearchClosed} onClick={handleOnClick}>
        Get Search
      </OpenSearch>
    </div>
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
