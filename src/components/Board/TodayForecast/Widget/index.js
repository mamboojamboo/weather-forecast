import PropTypes from 'prop-types';
import 'weather-icons/css/weather-icons.css';

import widgetConstructor from './utils';

const Widget = ({ data = {}, index = null }) =>
  widgetConstructor({ data, index });

Widget.displayName = 'Widget';

Widget.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Widget;
