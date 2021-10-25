import React from 'react';
import styled from 'styled-components';

export const ForecastTitle = ({ title = 'Weather Forecast' }) => (
  <Title>{title}</Title>
);

ForecastTitle.displayName = 'ForecastTitle';

const Title = styled.span`
  font-size: 16px;
  line-height: 27px;
  margin-bottom: 24px;
`;
