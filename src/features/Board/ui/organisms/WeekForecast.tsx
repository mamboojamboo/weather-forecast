import React from 'react';
import styled from 'styled-components';

import { ForecastTitle } from '../atoms/ForecastTitle';
import { Day } from '../atoms/Day';

type TWeekForecastMockData = {
  day: string,
  icon: number,
  temperature: string,
}[];

export const WeekForecast = (data: TWeekForecastMockData) => {
  return (
    <StyledWrapper>
      <ForecastTitle title={'Week Forecast'} />
      <DaysWrapper>
        {data.map((data, index) => (
          <Day key={index} {...{ data }} />
        ))}
      </DaysWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DaysWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
