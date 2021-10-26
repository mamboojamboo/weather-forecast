const tempToCelsius = (temperature: number) =>
  `${Math.floor(temperature - 273.15)}\xB0`;

const getIcon = (rangeId: number, now: number, sunrise: number, sunset: number) => {
  const isDay = sunrise < now && now < sunset;

  if ([200, 201, 202, 230, 231, 232].includes(rangeId)) {
    return isDay ? 'wi-day-thunderstorm' : 'wi-night-alt-thunderstorm';
  } else if ([210, 211, 212, 221].includes(rangeId)) {
    return isDay ? 'wi-day-lightning' : 'wi-night-alt-lightning';
  } else if ([300, 301, 321, 500].includes(rangeId)) {
    return isDay ? 'wi-day-sprinkle' : 'wi-night-alt-sprinkle';
  } else if ([302, 310, 311, 312, 313, 314, 501, 502, 503, 504].includes(rangeId)) {
    return isDay ? 'wi-day-rain' : 'wi-night-alt-rain';
  } else if ([511, 611, 612, 615, 616, 620].includes(rangeId)) {
    return isDay ? 'wi-day-rain-mix' : 'wi-night-alt-rain-mix';
  } else if ([520, 521, 522, 701].includes(rangeId)) {
    return isDay ? 'wi-day-showers' : 'wi-night-alt-showers';
  } else if ([531].includes(rangeId)) {
    return isDay ? 'wi-day-storm-showers' : 'wi-night-alt-storm-showers';
  } else if ([600, 602, 621, 622].includes(rangeId)) {
    return isDay ? 'wi-day-snow' : 'wi-night-alt-snow';
  } else if ([601].includes(rangeId)) {
    return isDay ? 'wi-day-sleet' : 'wi-night-alt-sleet';
  } else if ([711].includes(rangeId)) {
    return isDay ? 'wi-smoke' : 'wi-smoke';
  } else if ([721].includes(rangeId)) {
    return isDay ? 'wi-day-haze' : 'wi-day-haze';
  } else if ([731, 761, 762].includes(rangeId)) {
    return isDay ? 'wi-dust' : 'wi-dust';
  } else if ([741].includes(rangeId)) {
    return isDay ? 'wi-day-fog' : 'wi-night-fog';
  } else if ([781, 900].includes(rangeId)) {
    return isDay ? 'wi-tornado' : 'wi-tornado';
  } else if ([800].includes(rangeId)) {
    return isDay ? 'wi-day-sunny' : 'wi-night-clear';
  } else if ([801, 802, 803].includes(rangeId)) {
    return isDay ? 'wi-day-cloudy-gusts' : 'wi-night-alt-cloudy-gusts';
  } else if ([804].includes(rangeId)) {
    return isDay ? 'wi-day-sunny-overcast' : 'wi-night-alt-cloudy';
  } else if ([902].includes(rangeId)) {
    return isDay ? 'wi-hurricane' : 'wi-hurricane';
  } else if ([903].includes(rangeId)) {
    return isDay ? 'wi-snowflake-cold' : 'wi-snowflake-cold';
  } else if ([904].includes(rangeId)) {
    return isDay ? 'wi-hot' : 'wi-hot';
  } else if ([906].includes(rangeId)) {
    return isDay ? 'wi-day-hail' : 'wi-night-hail';
  } else if ([957].includes(rangeId)) {
    return isDay ? 'wi-strong-wind' : 'wi-strong-wind';
  } else {
    return 'wi-day-fog';
  }
};

export {
  tempToCelsius,
  getIcon,
};