import React from 'react';

import ForecastTitle from '../ForecastTitle';
import Day from './Day';

import { StyledWrapper, DaysWrapper } from './units';

const WeekForecast = ({ data = [] }) => {
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

export default WeekForecast;
