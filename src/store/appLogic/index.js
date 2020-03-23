import { kea } from 'kea';
import axios from 'axios';

const appLogic = kea({
  actions: () => ({
    loadData: (boolean) => (boolean),
    updateWeather: (data) => (data)
  }),

  reducers: ({ actions }) => ({
    weather: [{
      city: undefined,
      country: undefined,
      icon: undefined,
      tempCelsius: undefined,
      tempCelsiusMin: undefined,
      tempCelsiusMax: undefined,
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

      if (!city || !country) {
        const answer = {
          error: true
        };
        return actions.updateWeather(answer);
      }

      actions.loadData(true);

      const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
      await delay(1000);

      await axios.get(`//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API}`)
        .then((res) => {
          console.log(res);

          const getWeatherIcon = (rangeId) => {
            switch (true) {
              case rangeId >= 200 && rangeId <= 232:
                return 'wi-thunderstorm';
              case rangeId >= 300 && rangeId <= 321:
                return 'wi-sleet';
              case rangeId >= 500 && rangeId <= 531:
                return 'wi-storm-showers';
              case rangeId >= 600 && rangeId <= 622:
                return 'wi-snow';
              case rangeId >= 701 && rangeId <= 781:
                return 'wi-fog';
              case rangeId === 800:
                return 'wi-day-sunny';
              case rangeId >= 801 && rangeId <= 804:
                return 'wi-day-fog';
              default:
                return 'wi-day-fog';
            }
          };

          const answer = {
            city: res.data.name,
            country: res.data.sys.country,
            icon: getWeatherIcon(res.data.weather[0].id),
            tempCelsius: Math.floor(res.data.main.temp - 273.15),
            tempCelsiusMin: Math.floor(res.data.main.temp_min - 273.15),
            tempCelsiusMax: Math.floor(res.data.main.temp_max - 273.15),
            description: res.data.weather[0].description,
            error: false
          };
          actions.updateWeather(answer);
        })
        .catch((err) => {
          console.log(err);
        });
      actions.loadData(false);
    }

  })

});

export default appLogic;
