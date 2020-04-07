import React from 'react';
import PropTypes from 'prop-types';
import 'weather-icons/css/weather-icons.css';

import {
  Wrapper, Widget, City, WeatherIcon, Temp, Date, Description, ColumnWrapper
} from './units';

import LoadingProgress from '../../LoadingProgress';

const MainWidget = ({ weather, isLoading }) => (
    <Wrapper>

      <LoadingProgress {...{ isLoading }}/>

      <Widget {...{ isLoading }}>
        <Temp>{ weather.temp }</Temp>

        <ColumnWrapper>
          <City>{ weather.city }, { weather.country }</City>
          <Date>{ weather.date }</Date>
        </ColumnWrapper>

        <ColumnWrapper>
          <WeatherIcon><i className={`wi ${weather.icon}`}/></WeatherIcon>
          <Description>{ weather.description }</Description>
        </ColumnWrapper>
      </Widget>

    </Wrapper>
);

MainWidget.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
    icon: PropTypes.string,
    temp: PropTypes.string,
    tempMin: PropTypes.string,
    tempMax: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  }).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default MainWidget;
