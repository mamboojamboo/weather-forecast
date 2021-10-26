import { createEffect } from 'effector';

type TRqWeatherRequest = {
  city: string,
  country: string
}

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

}

export const efWeatherEndPoint = createEffect(
  async ({ city, country }: TRqWeatherRequest): Promise<TRsWeatherRequest> => {
    const req = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API}`)
    return req.json()
  }
);