import PropTypes from 'prop-types';
import { kea } from 'kea';
import axios from 'axios';

import {
  errorChecker,
  getSunTimeUpDown,
  getCurrentDayTime,
  tempToCelsius,
  getIcon
} from './utils';

const appLogic = kea({
  actions: () => ({
    setLoading: (boolean) => boolean,
    updateWeather: (data) => data,
    updateWidgetData: (data) => data
  }),

  reducers: ({ actions }) => ({
    weather: [
      {
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
        temp: PropTypes.string,
        tempMin: PropTypes.string,
        tempMax: PropTypes.string,
        description: PropTypes.string,
        error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
      }),
      {
        [actions.updateWeather]: (state, payload) => ({ ...state, ...payload })
      }
    ],

    widgetData: [
      [
        { temp: null },
        { icon: '', description: '' },
        { speed: null, deg: null },
        { humidity: null },
        { pressure: null },
        { sunrise: null, sunset: null }
      ],
      PropTypes.arrayOf(
        PropTypes.shape({
          temp: PropTypes.string
        }),
        PropTypes.shape({
          icon: PropTypes.string,
          description: PropTypes.string
        }),
        PropTypes.shape({
          speed: PropTypes.number,
          deg: PropTypes.number
        }),
        PropTypes.shape({
          humidity: PropTypes.number
        }),
        PropTypes.shape({
          pressure: PropTypes.number
        }),
        PropTypes.shape({
          sunrise: PropTypes.number,
          sunset: PropTypes.number
        })
      ),
      {
        [actions.updateWidgetData]: (_, payload) => payload
      }
    ],

    isLoading: [
      false,
      PropTypes.bool,
      {
        [actions.setLoading]: (_, payload) => payload
      }
    ]
  }),

  thunks: ({ actions, values }) => ({
    getWidgetData: async ({ city = 'moscow', country = 'ru' } = {}) => {
      actions.setLoading(true);

      const {
        status,
        data: {
          wind, weather: [weather], dt: date, sys, main, timezone
        } = {}
      } = await axios({
        method: 'get',
        url: `//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API}`
      }).catch((e) => e);

      if (status === 200) {
        const { speed, deg } = wind;
        const { id, description } = weather;
        const { sunrise, sunset } = sys;
        const { temp, humidity, pressure } = main;

        actions.updateWidgetData([
          { temp: tempToCelsius(temp) },
          { icon: getIcon(id, date, sunrise, sunset), description },
          { speed, deg },
          { humidity },
          { pressure },
          {
            sunrise: getSunTimeUpDown({ timestamp: sunrise, timezone }),
            sunset: getSunTimeUpDown({ timestamp: sunset, timezone })
          }
        ]);

        actions.setLoading(false);
      }
    },

    getWeatherAsync: async () => {
      actions.setLoading(true);

      await axios
        .get(
          `//api.openweathermap.org/data/2.5/forecast?q=london,uk&appid=${process.env.REACT_APP_API}`
        )
        .then((res) => {
          console.log('res in forecast method: ', res);
        })
        .catch((err) => err);
      actions.setLoading(false);
    },

    updateWeatherAsync: async (event) => {
      event.preventDefault();
      console.log('event: ', event.target);

      const city = event.target.inputCity.value.toLowerCase();
      const country = event.target.inputCountry.value.toLowerCase();

      errorChecker(city, country, actions.updateWeather);

      if (values.weather.error) {
        return;
      }

      actions.setLoading(true);
      event.target.reset();

      const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
      await delay(1000);

      await axios
        .get(
          `//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API}`
        )
        .then((res) => {
          const answer = {
            city: res.data.name,
            country: res.data.sys.country,
            date: getCurrentDayTime({
              timestamp: res.data.dt,
              timezone: res.data.timezone
            }),
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
