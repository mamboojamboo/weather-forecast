import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Wrapper = styled.div`
  ${({ isLoading }) => css`
    display: ${!isLoading ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    font-size: 2rem;
    color: white;
  `}
`;

const City = styled.span`
  ${({ city }) => css`
    display: ${city ? 'inline' : 'none'};
    font-size: 4rem;
  `}
`;

const WeatherIcon = styled.span`
  ${({ icon }) => css`
    display: ${icon ? 'inline' : 'none'};
    font-size: 6rem;
  `}
`;

const TempCelsius = styled.span`
  ${({ tempCelsius }) => css`
    display: ${tempCelsius ? 'inline' : 'none'};
  `}
`;

const TempMinMax = styled.span`
  ${({ tempCelsiusMin, tempCelsiusMax }) => css`
    display: ${tempCelsiusMin && tempCelsiusMax ? 'inline' : 'none'};
  `}
`;

const Description = styled.span`
  ${({ description }) => css`
    display: ${description ? 'inline' : 'none'};
  `}
`;

export {
  Wrapper, City, WeatherIcon, TempCelsius, TempMinMax, Description
};
