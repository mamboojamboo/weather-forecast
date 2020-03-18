import React from 'react';
import { useValues } from 'kea';

import MainPageWrapper from './units';
import SearchBar from '../../components/SearchBar';
import WeatherCard from '../../components/WeatherCard';

import appLogic from '../../store/appLogic';

const MainPage = () => {
  const { weather, isLoading } = useValues(appLogic);
  return (
    <MainPageWrapper>
        <SearchBar/>
        <WeatherCard {...{ weather, isLoading }} />
    </MainPageWrapper>
  );
};
export default MainPage;
