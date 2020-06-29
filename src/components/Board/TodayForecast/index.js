import React from 'react';

import ForecastTitle from '../ForecastTitle';
import Widget from './Widget';
import { StyledWrapper, WidgetsWrapper } from './units';

const TodayForecast = ({ widgetData = [] }) => {
  return (
    <StyledWrapper>
      <ForecastTitle title={'Today Forecast'} />
      <WidgetsWrapper>
        {widgetData.map((data, index) => (
          <Widget key={index} {...{ data, index }} />
        ))}
      </WidgetsWrapper>
    </StyledWrapper>
  );
};

export default TodayForecast;
