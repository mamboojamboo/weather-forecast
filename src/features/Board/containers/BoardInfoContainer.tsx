import React from 'react';
import styled from 'styled-components';

import { TodayForecast } from '../ui/organisms/TodayForecast';
import { WeekForecast } from '../ui/organisms/WeekForecast';
import { todayForecastMockData, weekForecastMockData } from '../constants/mockData';

export const Board = () => {
  return (
    <StyledWrapper>
      <TodayForecast data={todayForecastMockData} />
      <WeekForecast data={weekForecastMockData} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2% 2%;
  position: relative;
  width: 100%;
`;
