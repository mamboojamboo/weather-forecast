import styled from 'styled-components';

export const ForecastTitle = ({ title = 'Weather Forecast' }) => (
  <Title>{title}</Title>
);

const Title = styled.span`
  margin-bottom: 24px;
  font-size: 1rem;
  line-height: 1.6875rem;
`;
