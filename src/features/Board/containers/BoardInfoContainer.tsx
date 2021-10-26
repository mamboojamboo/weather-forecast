import React from 'react';
import styled from 'styled-components';

import { TodayForecast } from './TodayForecast';
import { WeekForecast } from '../ui/organisms/WeekForecast';

export const BoardInfoContainer = () => {
  return (
    <StyledWrapper>
      <TodayForecast />
      <WeekForecast />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2% 2%;
`;
