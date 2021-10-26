import styled from 'styled-components';


import 'weather-icons/css/weather-icons.css';
import { INTL } from '../../constants/intl';
import { COLORS } from '../../../../constants/colors';

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
          <Title>{INTL.WIDGETS.TITLES.TEMPERATURE}</Title>
          <Temperature>{data.temp}</Temperature>
        </StyledWrapper>
      );
    case 1:
      return (
        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.WEATHER}</Title>
          <WeatherIcon>
            <i className={`wi ${data.icon}`} />
          </WeatherIcon>
          <Description>{data.description}</Description>
        </StyledWrapper>
      );
    case 2:
      return (
        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.WIND}</Title>
          <WindSpeed>{data.speed} m/sec</WindSpeed>
          <div>{data.deg}</div>
        </StyledWrapper>
      );
    case 3:
      return (
        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.HUMIDITY}</Title>
          <div>{data.humidity}</div>
        </StyledWrapper>
      );
    case 4:
      return (
        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.PRESSURE}</Title>
          <div>{data.pressure}</div>
        </StyledWrapper>
      );
    case 5:
      return (
        <StyledWrapper>
          <Title>{INTL.WIDGETS.TITLES.SUNRISE_AND_SUNSET}</Title>
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

const Numeric = styled.span`
  font-size: 1rem;
`;