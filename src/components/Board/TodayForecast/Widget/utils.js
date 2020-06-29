import React from 'react';
import { StyledWrapper, Title, Numeric } from './units';

const widgetConstructor = (data, index) => {
  switch (index) {
    case 0:
      return (
        <StyledWrapper>
          <Title>Temperature</Title>
          <Numeric>{data.temp}</Numeric>
        </StyledWrapper>
      );
    case 1:
      return (
        <StyledWrapper>
          <Title>Weather</Title>
          <div>
            <i className={`wi ${data.icon}`} />
          </div>
          <div>{data.description}</div>
        </StyledWrapper>
      );
    case 2:
      return (
        <StyledWrapper>
          <Title>Wind</Title>
          <div>{data.speed}</div>
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
          <Title>Sun</Title>
          <div>{data.sunrise}</div>
          <div>{data.sunset}</div>
        </StyledWrapper>
      );
    default:
      return (
        <StyledWrapper>
          <Title>Ничего не найдено</Title>
          <Numeric> Data not found</Numeric>
        </StyledWrapper>
      );
  }
};

export default widgetConstructor;
