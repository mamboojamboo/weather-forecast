import React from 'react';
import PropTypes from 'prop-types';

import Title from './units';

const Forecast = ({ title = 'Weather Forecast' }) => <Title>{title}</Title>;

Forecast.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Forecast;
