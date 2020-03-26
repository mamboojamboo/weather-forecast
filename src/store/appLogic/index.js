import PropTypes from 'prop-types';
import { kea } from 'kea';
import axios from 'axios';

import { errorChecker, getIcon } from './utils';

const appLogic = kea({
  actions: () => ({
    setLoading: (boolean) => (boolean),
    updateWeather: (data) => (data)
  }),

  reducers: ({ actions }) => ({
    weather: [{
      city: '',
      country: '',
      icon: '',
      tempCelsius: null,
      tempCelsiusMin: null,
      tempCelsiusMax: null,
      description: '',
      error: false
    },
    PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
      icon: PropTypes.string,
      tempCelsius: PropTypes.number,
      tempCelsiusMin: PropTypes.number,
      tempCelsiusMax: PropTypes.number,
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
      event.preventDefault();

      const city = event.target.inputCity.value;
      const country = event.target.inputCountry.value;

      errorChecker(city, country, actions.updateWeather);

      if (values.weather.error) {
        return;
      }

      actions.setLoading(true);

      const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
      await delay(1000);

      await axios.get(`//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API}`)
        .then((res) => {
          console.log(res);

          const answer = {
            city: res.data.name,
            country: res.data.sys.country,
            icon: getIcon(
              res.data.weather[0].id,
              res.data.dt,
              res.data.sys.sunrise,
              res.data.sys.sunset
            ),
            tempCelsius: Math.floor(res.data.main.temp - 273.15),
            tempCelsiusMin: Math.floor(res.data.main.temp_min - 273.15),
            tempCelsiusMax: Math.floor(res.data.main.temp_max - 273.15),
            description: res.data.weather[0].description,
            error: false
          };

          return actions.updateWeather(answer);
        })
        .catch((err) => {
          console.log(err);
        });
      actions.setLoading(false);
    }

  })

});

export default appLogic;
