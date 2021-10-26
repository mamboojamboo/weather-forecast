export type TRqWeatherRequest = {
  city: string,
  country: string
};

export type TRsWeatherRequest = {
  main: {
    temp: number,
    humidity: number,
    pressure: number
  },
  wind: {
    speed: number,
    deg: number
  },
  weather: {
    id: number,
    description: string
  }[],
  sys: {
    sunrise: number,
    sunset: number
  },
  timezone: number,
  dt: number

};