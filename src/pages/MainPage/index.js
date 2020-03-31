import React, { useEffect } from 'react';
import { useValues, useActions } from 'kea';

import MainPageWrapper from './units';
import Header from '../../components/Header';
import MainWidget from '../../components/MainPage';

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
      <MainWidget {...{ weather, isLoading }} />
    </MainPageWrapper>
  );
};

export default MainPage;
