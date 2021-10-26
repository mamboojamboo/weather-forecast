import styled from 'styled-components';

import { ForecastTitle } from '../atoms/ForecastTitle';
import { Day } from '../molecules/Day';

import { weekForecastMockData } from '../../constants/mockData';


export const WeekForecast = () => {
  return (
    <StyledWrapper>
      <ForecastTitle title={'Week Forecast'} />
      <DaysWrapper>
        {weekForecastMockData.map((data, index) => (
          <Day
            key={index}
            day={data.day}
            icon={data.icon}
            temperature={data.temperature}
          />
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
