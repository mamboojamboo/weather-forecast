import { kea } from 'kea';
import axios from 'axios';

const tempToCelsius = (temp) => {
  const cell = Math.floor(temp - 273.15);
  return cell;
};

const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

const appLogic = kea({
  actions: () => ({
    loadData: (data) => (data),
    updateWeather: (data) => (data)
  }),

  reducers: ({ actions }) => ({
    weather: [{
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      tempCelsius: undefined,
      tempMax: undefined,
      tempMin: undefined,
      description: '',
      error: false
    }, {
      [actions.updateWeather]: (state, payload) => ({ ...state, ...payload })
    }],

    isLoading: [false, {
      [actions.loadData]: (state, payload) => payload,
      [actions.updateWeather]: () => false,
      [actions.updateWeatherAsync]: () => true
    }]
  }),

  thunks: ({ actions }) => ({
    updateWeatherAsync: async (event) => {
      event.preventDefault();
      actions.loadData(true);

      const city = event.target.inputCity.value;
      const country = event.target.inputCountry.value;

      if (!city || !country) {
        const answer = {
          error: true
        };
        return actions.updateWeather(answer);
      }

      await delay(5000);
      await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API}`)
        .then((res) => {
          const answer = {
            city: res.data.name,
            country: res.data.sys.country,
            icon: undefined,
            main: undefined,
            tempCelsius: tempToCelsius(res.data.main.temp),
            tempMax: tempToCelsius(res.data.main.temp_max),
            tempMin: tempToCelsius(res.data.main.temp_min),
            description: res.data.weather[0].description,
            error: false
          };
          actions.updateWeather(answer);
          actions.loadData(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }

  })

});

export default appLogic;
