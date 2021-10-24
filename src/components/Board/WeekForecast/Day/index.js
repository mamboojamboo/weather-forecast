import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper, Title, Icon, Temperature } from './units';

const Day = ({ data = {} }) => {
  const { day = 'Monday', icon, temperature = '12' } = data;
  return (
    <StyledWrapper>
      <Title>{day}</Title>
      <Icon>{icon}</Icon>
      <Temperature>{temperature}</Temperature>
    </StyledWrapper>
  );
};

Day.propTypes = {
  data: PropTypes.shape({
    day: PropTypes.string,
    icon: PropTypes.string,
    temperature: PropTypes.string,
  }).isRequired,
};

export default Day;
