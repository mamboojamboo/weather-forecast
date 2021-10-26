import { createEffect } from 'effector';
import { TRqWeatherRequest, TRsWeatherRequest } from '../../types';

export const efWeatherEndPoint = createEffect(
  async ({ city, country }: TRqWeatherRequest): Promise<TRsWeatherRequest> => {
    const req = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API}`)
    return req.json()
  }
);