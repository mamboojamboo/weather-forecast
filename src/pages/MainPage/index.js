import React, { useEffect } from 'react';
import { useValues, useActions } from 'kea';

import MainPageWrapper from './units';
import Header from '../../components/Header';
// import SearchBar from '../../components/SearchBar';
import WeatherCard from '../../components/MainPage';

import appLogic from '../../store/appLogic';


const MainPage = () => {
  const { weather, isLoading } = useValues(appLogic);
  const { updateWeatherAsync } = useActions(appLogic);

  useEffect(() => {
    updateWeatherAsync();
  }, [updateWeatherAsync]);

  return (
    <MainPageWrapper>
      <Header/>
        {/* <SearchBar {...{ weather, isLoading, updateWeatherAsync }}/> */}
        <WeatherCard {...{ weather, isLoading }} />
    </MainPageWrapper>
  );
};

export default MainPage;
