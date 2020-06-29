import React from 'react';
import PropTypes from 'prop-types';

import Title from './units';

const ForecastTitle = ({ title = 'Weather Forecast' }) => (
  <Title>{title}</Title>
);

ForecastTitle.displayName = 'ForecastTitle';

ForecastTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ForecastTitle;
