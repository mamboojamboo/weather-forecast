import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper, Title, Numeric } from './units';

const Widget = ({ data = {} }) => {
  const { title = 'Title', numeric = '15' } = data;
  return (
    <StyledWrapper>
      <Title>{title}</Title>
      <Numeric>{numeric}</Numeric>
    </StyledWrapper>
  );
};

Widget.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    numeric: PropTypes.string,
  }).isRequired,
};

export default Widget;
