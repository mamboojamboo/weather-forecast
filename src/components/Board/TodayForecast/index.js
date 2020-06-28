import React from 'react';

import ForecastTitle from '../ForecastTitle';
import Widget from './Widget';
import { StyledWrapper, WidgetsWrapper } from './units';

const TodayForecast = ({ data = [] }) => {
  const mockData = [
    {
      title: 'Title',
      numeric: '20',
    },
    {
      title: 'Title',
      numeric: '20',
    },
    {
      title: 'Title',
      numeric: '20',
    },
    {
      title: 'Title',
      numeric: '20',
    },
    {
      title: 'Title',
      numeric: '20',
    },
    {
      title: 'Title',
      numeric: '20',
    },
  ];
  if (!data.length) {
    data.push(...mockData);
  }
  return (
    <StyledWrapper>
      <ForecastTitle title={'Today Forecast'} />
      <WidgetsWrapper>
        {data.map((data, index) => (
          <Widget key={index} {...{ data }} />
        ))}
      </WidgetsWrapper>
    </StyledWrapper>
  );
};

export default TodayForecast;
