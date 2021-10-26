import { createStore } from "effector";

import { efWeatherEndPoint } from "../effects/weatherEndPoint";
import {
  formatTempToCelsius,
  formatIcon,
  formatSunTimeUpDown,
  formatWindSpeed,
  formatHumidity,
  formatPressure
} from "../../utils";


efWeatherEndPoint({ city: 'london', country: 'uk' });

const weatherEvent = efWeatherEndPoint.doneData.map((result) => ({
  temp: formatTempToCelsius(result.main.temp),
  icon: formatIcon(result.weather[0].id, result.dt, result.sys.sunrise, result.sys.sunset),
  description: result.weather[0].description,
  speed: formatWindSpeed(result.wind.speed),
  deg: result.wind.deg,
  humidity: formatHumidity(result.main.humidity),
  pressure: formatPressure(result.main.pressure),
  sunrise: formatSunTimeUpDown(result.timezone, result.sys.sunrise),
  sunset: formatSunTimeUpDown(result.timezone, result.sys.sunset),
}));

export const $weatherStore = createStore({
  temp: '',
  icon: '',
  description: '',
  speed: '',
  deg: 0,
  humidity: '',
  pressure: '',
  sunrise: '',
  sunset: ''
})
  .on(weatherEvent, (_, payload) => payload);

weatherEvent.watch(value => console.log('weatherEvent: ', value));
$weatherStore.watch(value => console.log('$weatherStore: ', value));
