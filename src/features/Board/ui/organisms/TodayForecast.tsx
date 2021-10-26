import styled from 'styled-components';
import { useStore } from 'effector-react';
import 'weather-icons/css/weather-icons.css';

import { COLORS } from '../../../../constants/colors';

import { ForecastTitle } from '../atoms/ForecastTitle';

import { INTL } from '../../constants/intl';
import { $weatherStore } from '../../models/stores/weather'

export const TodayForecast = () => {
  const weatherStore = useStore($weatherStore);

  return (
    <MainStyledWrapper>
      <ForecastTitle title={INTL.TITLES.TODAY_FORECAST} />
      <WidgetsWrapper>
        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.TEMPERATURE}</Title>
          <Temperature>{weatherStore.temp}</Temperature>
        </StyledWrapper>

        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.WEATHER}</Title>
          <WeatherIcon>
            <i className={`wi ${weatherStore.icon}`} />
          </WeatherIcon>
          <Description>{weatherStore.description}</Description>
        </StyledWrapper>

        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.WIND}</Title>
          <WindSpeed>{weatherStore.speed} m/sec</WindSpeed>
          <div>{weatherStore.deg}</div>
        </StyledWrapper>

        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.HUMIDITY}</Title>
          <div>{weatherStore.humidity}</div>
        </StyledWrapper>

        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.PRESSURE}</Title>
          <div>{weatherStore.pressure}</div>
        </StyledWrapper>

        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.SUNRISE_AND_SUNSET}</Title>
          <div>{weatherStore.sunrise}</div>
          <div>{weatherStore.sunset}</div>
        </StyledWrapper>
      </WidgetsWrapper>
    </MainStyledWrapper>
  );
};

/* {weatherStore.map((data, index) => (
  <Widget key={index} data={data} index={index} />
))} */

const MainStyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WidgetsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledWrapper = styled.div`
  width: 32%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding: 2% 2%;
  border-radius: 10px;
  background-color: ${COLORS.WHITE};
`;

const Title = styled.span`
  width: 100%;
  display: flex;
  color: ${COLORS.DARK_GREY};
`;

const Temperature = styled.span`
  font-size: 10rem;
  color: ${COLORS.DARK_GREY};
`;

const WeatherIcon = styled.span`
  font-size: 5rem;
  color: ${COLORS.DARK_GREY};
`;

const Description = styled.span`
  font-size: 1rem;
`;

const WindSpeed = styled.span`
  font-size: 3rem;
`;
