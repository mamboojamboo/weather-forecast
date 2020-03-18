import styled from '@emotion/styled';

const Wrapper = styled.div((props) => ({
  display: !props.isLoading ? 'flex' : 'none',
  flexDirection: 'column'
}));

const City = styled.span((props) => ({
  display: props.city ? 'inline' : 'none',
  fontSize: '2rem',
  color: 'white',
  textTransform: 'uppercase'
}));

const WeatherIcon = styled.div((props) => ({
  display: props.icon ? 'flex' : 'none'
}));

const TempCelsius = styled.span((props) => ({
  display: props.tempCelsius ? 'inline' : 'none',
  fontSize: '2rem',
  color: 'white',
  textTransform: 'uppercase'
}));

const TempMinMax = styled.span((props) => ({
  display: props.tempMin && props.tempMax ? 'inline' : 'none',
  fontSize: '2rem',
  color: 'white',
  textTransform: 'uppercase'
}));

const Description = styled.span((props) => ({
  display: props.description ? 'inline' : 'none',
  fontSize: '2rem',
  color: 'white'
}));

export {
  Wrapper, City, WeatherIcon, TempCelsius, TempMinMax, Description
};
