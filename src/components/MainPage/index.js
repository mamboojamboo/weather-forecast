import React from 'react';

import Wrapper from './units';
import LoadingProgress from './LoadingProgress';
import Card from './MainWidget';

const WeatherCard = ({ weather, isLoading }) => (
  <Wrapper>
    <LoadingProgress {...{ isLoading }}/>
    <Card {...{ weather, isLoading }}/>
  </Wrapper>
);

export default WeatherCard;
