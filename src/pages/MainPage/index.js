import React from 'react';
import { useValues, useActions } from 'kea';

import MainPageWrapper from './units';
import SearchBar from '../../components/SearchBar';
import WeatherCard from '../../components/WeatherCard';

import appLogic from '../../store/appLogic';

const MainPage = () => {
  const { weather, isLoading } = useValues(appLogic);
  const { updateWeatherAsync } = useActions(appLogic);
  return (
    <MainPageWrapper>
        <SearchBar {...{ weather, isLoading, updateWeatherAsync }}/>
        <WeatherCard {...{ weather, isLoading }} />
    </MainPageWrapper>
  );
};

export default MainPage;
