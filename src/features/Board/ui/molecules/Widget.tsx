import React from 'react';
import styled from 'styled-components';
// import 'weather-icons/css/weather-icons.css';

type TWidgetProps = {
  data: {
    temp?: number;
    icon?: string;
    description?: string;
    speed?: number;
    deg?: number;
    humidity?: number;
    pressure?: number;
    sunrise?: number;
    sunset?: number;
  };
  index: number;
}

export const Widget = ({ data, index }: TWidgetProps) => {
  switch (index) {
    case 0:
      return (
        <StyledWrapper>
          <Title>Temperature</Title>
          <Temperature>{data.temp}</Temperature>
        </StyledWrapper>
      );
    case 1:
      return (
        <StyledWrapper>
          <Title>Weather</Title>
          <WeatherIcon>
            <i className={`wi ${data.icon}`} />
          </WeatherIcon>
          <Description>{data.description}</Description>
        </StyledWrapper>
      );
    case 2:
      return (
        <StyledWrapper>
          <Title>Wind</Title>
          <WindSpeed>{data.speed} m/sec</WindSpeed>
          <div>{data.deg}</div>
        </StyledWrapper>
      );
    case 3:
      return (
        <StyledWrapper>
          <Title>Humidity</Title>
          <div>{data.humidity}</div>
        </StyledWrapper>
      );
    case 4:
      return (
        <StyledWrapper>
          <Title>Pressure</Title>
          <div>{data.pressure}</div>
        </StyledWrapper>
      );
    case 5:
      return (
        <StyledWrapper>
          <Title>Sunrise and Sunset</Title>
          <div>{data.sunrise}</div>
          <div>{data.sunset}</div>
        </StyledWrapper>
      );
    default:
      return (
        <StyledWrapper>
          <Title>Error</Title>
          <Numeric> Data not found</Numeric>
        </StyledWrapper>
      );
  }
};

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