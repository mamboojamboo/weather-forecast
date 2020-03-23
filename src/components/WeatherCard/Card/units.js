import styled from '@emotion/styled';

const Wrapper = styled.div((props) => ({
  display: !props.isLoading ? 'flex' : 'none',
  flexDirection: 'column',
  alignItems: 'center',
  textTransform: 'uppercase',
  fontSize: '2rem',
  color: 'white'
}));

const City = styled.span((props) => ({
  display: props.city ? 'inline' : 'none',
  fontSize: '4rem'
}));

const WeatherIcon = styled.div((props) => ({
  display: props.icon ? 'inline' : 'none',
  fontSize: '8rem'
}));


const TempCelsius = styled.span((props) => ({
  display: props.tempCelsius ? 'inline' : 'none'
}));

const TempMinMax = styled.span((props) => ({
  display: props.tempCelsiusMin && props.tempCelsiusMax ? 'inline' : 'none'
}));

const Description = styled.span((props) => ({
  display: props.description ? 'inline' : 'none'
}));

export {
  Wrapper, City, WeatherIcon, TempCelsius, TempMinMax, Description
};
