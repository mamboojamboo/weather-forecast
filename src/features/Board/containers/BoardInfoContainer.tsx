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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2% 2%;
  position: relative;
  width: 100%;
`;
