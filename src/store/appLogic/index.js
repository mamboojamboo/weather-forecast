import { kea } from 'kea';
import axios from 'axios';

import getIcon from './utils';

const appLogic = kea({
  actions: () => ({
    loadData: (boolean) => (boolean),
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
    }, {
      [actions.updateWeather]: (state, payload) => ({ ...state, ...payload })
    }],

    isLoading: [false, {
      [actions.loadData]: (_, payload) => payload
    }]
  }),

  thunks: ({ actions }) => ({
    updateWeatherAsync: async (event) => {
      event.preventDefault();

      const city = event.target.inputCity.value;
      const country = event.target.inputCountry.value;

      if (!city && !country) {
        const answer = {
          error: {
            city: 'You need to enter city',
            country: 'You need to enter country'
          }
        };
        return actions.updateWeather(answer);
      }

      if (!city) {
        const answer = {
          error: {
            city: 'You need to enter city'
          }
        };
        return actions.updateWeather(answer);
      }

      if (!country) {
        const answer = {
          error: {
            country: 'You need to enter country'
          }
        };
        return actions.updateWeather(answer);
      }

      if (city && country) {
        const answer = {
          error: false
        };
        actions.updateWeather(answer);
      }

      actions.loadData(true);

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
            error: {
              status: false
            }
          };

          return actions.updateWeather(answer);
        })
        .catch((err) => {
          console.log(err);
        });
      return actions.loadData(false);
    }

  })

});

export default appLogic;
