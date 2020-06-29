import React from 'react';

import { StyledWrapper } from './units';
import TodayForecast from './TodayForecast';
import WeekForecast from './WeekForecast';
import data from './config';

const Board = ({ widgetData = [] }) => {
  return (
    <StyledWrapper>
      <TodayForecast {...{ widgetData }} />
      <WeekForecast {...{ data }} />
    </StyledWrapper>
  );
};

export default Board;
