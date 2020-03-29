import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Wrapper = styled.div`
  ${({ isLoading }) => css`
    width: 30%;
    display: ${!isLoading ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    color: #676c6d;
    padding: 2% 1%;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    margin-top: 2%;
  `}
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  :last-of-type {
    align-items: center;
  }
`;

const Temp = styled.span`
  ${({ temp }) => css`
    display: ${temp ? 'inline' : 'none'};
    font-size: 6rem;
    line-height: 5rem;
  `}
`;

const City = styled.span`
  ${({ city }) => css`
    display: ${city ? 'inline' : 'none'};
    font-size: 1.3rem;
  `}
`;

const Date = styled.div`
  font-size: 0.85rem;
`;

const WeatherIcon = styled.span`
  ${({ icon }) => css`
    display: ${icon ? 'inline' : 'none'};
    font-size: 1.5rem;
  `}
`;

const Description = styled.span`
  ${({ description }) => css`
    display: ${description ? 'inline' : 'none'};
    font-size: 0.85rem;
  `}
`;

export {
  Wrapper, Date, City, WeatherIcon, Temp, Description, ColumnWrapper
};
