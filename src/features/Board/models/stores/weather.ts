import { createStore } from "effector";
import { tempToCelsius, getIcon, getSunTimeUpDown, formatWindSpeed } from "../../utils";
import { efWeatherEndPoint } from "../effects/weatherEndPoint";

efWeatherEndPoint({ city: 'london', country: 'uk' });

const weatherEvent = efWeatherEndPoint.doneData.map((result) => ({
  temp: tempToCelsius(result.main.temp),
  icon: getIcon(result.weather[0].id, result.dt, result.sys.sunrise, result.sys.sunset),
  description: result.weather[0].description,
  speed: formatWindSpeed(result.wind.speed),
  deg: result.wind.deg,
  humidity: result.main.humidity,
  pressure: result.main.pressure,
  sunrise: getSunTimeUpDown(result.timezone, result.sys.sunrise),
  sunset: getSunTimeUpDown(result.timezone, result.sys.sunset),
}));

export const $weatherStore = createStore({
  temp: '',
  icon: '',
  description: '',
  speed: '',
  deg: 0,
  humidity: 0,
  pressure: 0,
  sunrise: '',
  sunset: ''
})
  .on(weatherEvent, (_, payload) => payload);

weatherEvent.watch(value => console.log('weatherEvent: ', value));
$weatherStore.watch(value => console.log('$weatherStore: ', value));
