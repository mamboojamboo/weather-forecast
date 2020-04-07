import React from 'react';
import SearchBar from './SearchBar';
import { Wrapper, Title } from './units';

const Header = ({ weather, isLoading, updateWeatherAsync }) => {
  const data = 0;

  return (
    <Wrapper>
      <Title>Main weather</Title>
      <SearchBar {...{ weather, isLoading, updateWeatherAsync }} />
    </Wrapper>
  );
};

export default Header;
