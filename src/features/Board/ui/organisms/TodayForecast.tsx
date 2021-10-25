import React from 'react';
import styled from 'styled-components';

import { ForecastTitle } from '../atoms/ForecastTitle';
import { Widget } from '../molecules/Widget';

type TWidgetData = [
  temp: number,
  icon: string,
  description: string,
  speed: number,
  deg: number,
  humidity: number,
  pressure: number,
  sunrise: number,
  sunset: number
]

export const TodayForecast = (data: TWidgetData) => {
  return (
    <StyledWrapper>
      <ForecastTitle title={'Today Forecast'} />
      <WidgetsWrapper>
        {data.map((data, index) => (
          <Widget key={index} {...{ data, index }} />
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
