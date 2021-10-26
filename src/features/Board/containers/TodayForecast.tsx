import React from 'react';
import styled from 'styled-components';

import { ForecastTitle } from '../ui/atoms/ForecastTitle';
import { Widget } from '../ui/molecules/Widget';

import { todayForecastMockData } from '../constants/mockData';

export const TodayForecast = () => {
  return (
    <StyledWrapper>
      <ForecastTitle title={'Today Forecast'} />
      <WidgetsWrapper>
        {todayForecastMockData.map((data, index) => (
          <Widget key={index} data={data} index={index} />
        ))}
      </WidgetsWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WidgetsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
