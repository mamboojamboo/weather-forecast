import PropTypes from 'prop-types';
import { kea } from 'kea';
import axios from 'axios';

import {
  errorChecker, formatDate, tempToCelsius, getIcon
} from './utils';

const appLogic = kea({
  actions: () => ({
    setLoading: (boolean) => (boolean),
    updateWeather: (data) => (data)
  }),

  reducers: ({ actions }) => ({
    weather: [{
      city: '',
      country: '',
      date: null,
      sunrise: null,
      sunset: null,
      icon: '',
      temp: null,
      tempMin: null,
      tempMax: null,
      description: '',
      error: false
    },
    PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
      date: PropTypes.string,
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
      icon: PropTypes.string,
      temp: PropTypes.number,
      tempMin: PropTypes.number,
      tempMax: PropTypes.number,
      description: PropTypes.string,
      error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
      ])
    }), {
      [actions.updateWeather]: (state, payload) => ({ ...state, ...payload })
    }],

    isLoading: [false, PropTypes.bool, {
      [actions.setLoading]: (_, payload) => payload
    }]
  }),

  thunks: ({ actions, values }) => ({
    updateWeatherAsync: async (event) => {
      // event.preventDefault();

      // const city = event.target.inputCity.value.toLowerCase();
      // const country = event.target.inputCountry.value.toLowerCase();

      // errorChecker(city, country, actions.updateWeather);

      // if (values.weather.error) {
      //   return;
      // }

      actions.setLoading(true);

      const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
      await delay(1000);

      await axios.get(`//api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${process.env.REACT_APP_API}`)
        .then((res) => {
          console.log(res);

          const answer = {
            city: res.data.name,
            country: res.data.sys.country,
            date: formatDate(res.data.dt, res.data.timezone),
            sunrise: res.data.sys.sunrise,
            sunset: res.data.sys.sunset,
            icon: getIcon(
              res.data.weather[0].id,
              res.data.dt,
              res.data.sys.sunrise,
              res.data.sys.sunset
            ),
            temp: tempToCelsius(res.data.main.temp),
            tempMin: tempToCelsius(res.data.main.temp_min),
            tempMax: tempToCelsius(res.data.main.temp_max),
            description: res.data.weather[0].description,
            error: false
          };

          return actions.updateWeather(answer);
        })
        .catch((err) => err);
      actions.setLoading(false);
    }

  })

});

export default appLogic;
