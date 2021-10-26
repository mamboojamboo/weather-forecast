export const tempToCelsius = (temperature: number) =>
  `${Math.floor(temperature - 273.15)}\xB0`;

export const getIcon = (rangeId: number, now: number, sunrise: number, sunset: number) => {
  const isDay = sunrise < now && now < sunset;

  if ([200, 201, 202, 230, 231, 232].includes(rangeId)) {
    return isDay ? 'wi wi-day-thunderstorm' : 'wi wi-night-alt-thunderstorm';
  } else if ([210, 211, 212, 221].includes(rangeId)) {
    return isDay ? 'wi wi-day-lightning' : 'wi wi-night-alt-lightning';
  } else if ([300, 301, 321, 500].includes(rangeId)) {
    return isDay ? 'wi wi-day-sprinkle' : 'wi wi-night-alt-sprinkle';
  } else if ([302, 310, 311, 312, 313, 314, 501, 502, 503, 504].includes(rangeId)) {
    return isDay ? 'wi wi-day-rain' : 'wi wi-night-alt-rain';
  } else if ([511, 611, 612, 615, 616, 620].includes(rangeId)) {
    return isDay ? 'wi wi-day-rain-mix' : 'wi wi-night-alt-rain-mix';
  } else if ([520, 521, 522, 701].includes(rangeId)) {
    return isDay ? 'wi wi-day-showers' : 'wi wi-night-alt-showers';
  } else if ([531].includes(rangeId)) {
    return isDay ? 'wi wi-day-storm-showers' : 'wi wi-night-alt-storm-showers';
  } else if ([600, 602, 621, 622].includes(rangeId)) {
    return isDay ? 'wi wi-day-snow' : 'wi wi-night-alt-snow';
  } else if ([601].includes(rangeId)) {
    return isDay ? 'wi wi-day-sleet' : 'wi wi-night-alt-sleet';
  } else if ([711].includes(rangeId)) {
    return isDay ? 'wi wi-smoke' : 'wi wi-smoke';
  } else if ([721].includes(rangeId)) {
    return isDay ? 'wi wi-day-haze' : 'wi wi-day-haze';
  } else if ([731, 761, 762].includes(rangeId)) {
    return isDay ? 'wi wi-dust' : 'wi wi-dust';
  } else if ([741].includes(rangeId)) {
    return isDay ? 'wi wi-day-fog' : 'wi wi-night-fog';
  } else if ([781, 900].includes(rangeId)) {
    return isDay ? 'wi wi-tornado' : 'wi wi-tornado';
  } else if ([800].includes(rangeId)) {
    return isDay ? 'wi wi-day-sunny' : 'wi wi-night-clear';
  } else if ([801, 802, 803].includes(rangeId)) {
    return isDay ? 'wi wi-day-cloudy-gusts' : 'wi wi-night-alt-cloudy-gusts';
  } else if ([804].includes(rangeId)) {
    return isDay ? 'wi wi-day-sunny-overcast' : 'wi wi-night-alt-cloudy';
  } else if ([902].includes(rangeId)) {
    return isDay ? 'wi wi-hurricane' : 'wi wi-hurricane';
  } else if ([903].includes(rangeId)) {
    return isDay ? 'wi wi-snowflake-cold' : 'wi wi-snowflake-cold';
  } else if ([904].includes(rangeId)) {
    return isDay ? 'wi wi-hot' : 'wi wi-hot';
  } else if ([906].includes(rangeId)) {
    return isDay ? 'wi wi-day-hail' : 'wi wi-night-hail';
  } else if ([957].includes(rangeId)) {
    return isDay ? 'wi wi-strong-wind' : 'wi wi-strong-wind';
  } else {
    return 'wi wi-day-fog';
  }
};

const formatTime = (time: number) => time < 10 ? `0${time}` : time;

export const getSunTimeUpDown = (timestamp: number, timezone: number) => {
  const timezoneShift = timezone * 1000;
  const apiDate = new Date(timestamp * 1000 + timezoneShift);
  const hours = formatTime(apiDate.getUTCHours());
  const minutes = formatTime(apiDate.getUTCMinutes());

  return `${hours}:${minutes}`;
};

export const formatWindSpeed = (speed: number) => `${speed} m/sec`;