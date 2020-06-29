import React, { useEffect } from 'react';
import { useValues, useActions } from 'kea';

import SidePanel from '../../components/SidePanel';
import Board from '../../components/Board';
import { StyledWrapper } from './units';

import appLogic from '../../store/appLogic';

const MainWidget = () => {
  const { weather, widgetData, isLoading } = useValues(appLogic);
  const { getWeatherAsync, getWidgetData, updateWeatherAsync } = useActions(
    appLogic,
  );

  useEffect(() => {
    getWeatherAsync();
    getWidgetData({ city: 'Moscow', country: 'RU' });
  }, [getWeatherAsync]);

  return (
    <StyledWrapper>
      <SidePanel />
      <Board {...{ widgetData }} />
    </StyledWrapper>
  );
};

export default MainWidget;
