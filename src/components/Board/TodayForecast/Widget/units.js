import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2% 2%;
  position: relative;
  background-color: white;
  border-radius: 10px;
  width: 32%;
  height: 250px;
  margin-bottom: 24px;
`;

const Title = styled.span`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
  color: grey;
`;

const Temperature = styled.span`
  font-size: 10rem;
  color: grey;
`;

const WeatherIcon = styled.span`
  font-size: 5rem;
  color: grey;
`;

const Description = styled.span`
  font-size: 0.85rem;
`;

const WindSpeed = styled.span`
  font-size: 3rem;
`;

const Numeric = styled.span`
  font-size: 14px;
`;

export {
  StyledWrapper,
  Title,
  Temperature,
  WeatherIcon,
  Description,
  WindSpeed,
  Numeric,
};
