import React, { useEffect } from 'react';
import { useValues, useActions } from 'kea';

import MainPageWrapper from './units';
import Header from '../../components/Header';
import MainWidget from '../../components/MainPage';

import appLogic from '../../store/appLogic';


const MainPage = () => {
  const { weather, isLoading } = useValues(appLogic);
  const { getWeatherAsync, updateWeatherAsync } = useActions(appLogic);

  useEffect(() => {
    getWeatherAsync();
  }, [getWeatherAsync]);

  return (
    <MainPageWrapper>
      <Header {...{ weather, isLoading, updateWeatherAsync }}/>
      <MainWidget {...{ weather, isLoading }} />
    </MainPageWrapper>
  );
};

export default MainPage;
