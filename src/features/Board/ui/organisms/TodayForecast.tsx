import React from 'react';
import styled from 'styled-components';

import { ForecastTitle } from '../atoms/ForecastTitle';
import { Widget } from '../molecules/Widget';

import { INTL } from '../../constants/intl';

import { todayForecastMockData } from '../../constants/mockData';

export const TodayForecast = () => {
  return (
    <StyledWrapper>
      <ForecastTitle title={INTL.TITLES.TODAY_FORECAST} />
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
