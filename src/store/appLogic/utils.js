const errorChecker = (city, country, callback) => {
  switch (true) {
    case !city && !country:
      return callback({
        error: {
          city: 'Please enter city:',
          country: 'Please enter country:',
        },
      });
    case !city:
      return callback({
        error: {
          city: 'Please enter city:',
        },
      });
    case !country:
      return callback({
        error: {
          country: 'Please enter country:',
        },
      });
    default:
      return callback({
        error: false,
      });
  }
};

const formatTime = ({ time = 0 }) => (time < 10 ? `0${time}` : time);

const formatDay = ({ day = {} }) =>
  day.toLocaleString('en-EN', { weekday: 'long' });

const formatMonth = ({ month = {} }) =>
  month.toLocaleString('en-EN', { month: 'long' });

const getSunTimeUpDown = ({ timestamp = 0, timezone = 0 } = {}) => {
  const timezoneShift = timezone * 1000;
  const apiDate = new Date(timestamp * 1000 + timezoneShift);

  const hours = formatTime({ time: apiDate.getUTCHours() });
  const minutes = formatTime({ time: apiDate.getUTCMinutes() });

  return `${hours}:${minutes}`;
};

const getCurrentDayTime = ({ timestamp = 0, timezone = 0 } = {}) => {
  const timezoneShift = timezone * 1000;
  const apiDate = new Date(Date(timestamp * 1000));
  const utcDate = apiDate.getTime() + apiDate.getTimezoneOffset() * 60000;
  const localDate = new Date(utcDate + timezoneShift);

  const year = localDate.getFullYear();
  const month = formatMonth({ month: localDate });
  const date = localDate.getDate();
  const day = formatDay({ day: localDate });
  const hours = formatTime({ time: localDate.getHours() });
  const minutes = formatTime({ time: localDate.getMinutes() });

  return `${hours}:${minutes} - ${day}, ${date} ${month} ${year}`;
};

const tempToCelsius = (temperature) =>
  `${Math.floor(temperature - 273.15)}\xB0`;

const getIcon = (rangeId, now, sunrise, sunset) => {
  const isDay = sunrise < now && now < sunset;

  switch (true) {
    case [200, 201, 202, 230, 231, 232].includes(rangeId):
      return isDay ? 'wi-day-thunderstorm' : 'wi-night-alt-thunderstorm';
    case [210, 211, 212, 221].includes(rangeId):
      return isDay ? 'wi-day-lightning' : 'wi-night-alt-lightning';
    case [300, 301, 321, 500].includes(rangeId):
      return isDay ? 'wi-day-sprinkle' : 'wi-night-alt-sprinkle';
    case [302, 310, 311, 312, 313, 314, 501, 502, 503, 504].includes(rangeId):
      return isDay ? 'wi-day-rain' : 'wi-night-alt-rain';
    case [511, 611, 612, 615, 616, 620].includes(rangeId):
      return isDay ? 'wi-day-rain-mix' : 'wi-night-alt-rain-mix';
    case [520, 521, 522, 701].includes(rangeId):
      return isDay ? 'wi-day-showers' : 'wi-night-alt-showers';
    case [531].includes(rangeId):
      return isDay ? 'wi-day-storm-showers' : 'wi-night-alt-storm-showers';
    case [600, 602, 621, 622].includes(rangeId):
      return isDay ? 'wi-day-snow' : 'wi-night-alt-snow';
    case [601].includes(rangeId):
      return isDay ? 'wi-day-sleet' : 'wi-night-alt-sleet';
    case [711].includes(rangeId):
      return isDay ? 'wi-smoke' : 'wi-smoke';
    case [721].includes(rangeId):
      return isDay ? 'wi-day-haze' : 'wi-day-haze';
    case [731, 761, 762].includes(rangeId):
      return isDay ? 'wi-dust' : 'wi-dust';
    case [741].includes(rangeId):
      return isDay ? 'wi-day-fog' : 'wi-night-fog';
    case [781, 900].includes(rangeId):
      return isDay ? 'wi-tornado' : 'wi-tornado';
    case [800].includes(rangeId):
      return isDay ? 'wi-day-sunny' : 'wi-night-clear';
    case [801, 802, 803].includes(rangeId):
      return isDay ? 'wi-day-cloudy-gusts' : 'wi-night-alt-cloudy-gusts';
    case [804].includes(rangeId):
      return isDay ? 'wi-day-sunny-overcast' : 'wi-night-alt-cloudy';
    case [902].includes(rangeId):
      return isDay ? 'wi-hurricane' : 'wi-hurricane';
    case [903].includes(rangeId):
      return isDay ? 'wi-snowflake-cold' : 'wi-snowflake-cold';
    case [904].includes(rangeId):
      return isDay ? 'wi-hot' : 'wi-hot';
    case [906].includes(rangeId):
      return isDay ? 'wi-day-hail' : 'wi-night-hail';
    case [957].includes(rangeId):
      return isDay ? 'wi-strong-wind' : 'wi-strong-wind';
    default:
      return 'wi-day-fog';
  }
};

export {
  errorChecker,
  getSunTimeUpDown,
  getCurrentDayTime,
  tempToCelsius,
  getIcon,
};
