type TWeekForecastMockData = {
  day: string,
  icon: null,
  temperature: string
}[];

export const weekForecastMockData: TWeekForecastMockData = [
  {
    day: 'Monday',
    icon: null,
    temperature: '10',
  },
  {
    day: 'Tuesday',
    icon: null,
    temperature: '11',
  },
  {
    day: 'Wednesday',
    icon: null,
    temperature: '13',
  },
  {
    day: 'Thursday',
    icon: null,
    temperature: '14',
  },
  {
    day: 'Friday',
    icon: null,
    temperature: '15',
  },
  {
    day: 'Saturday',
    icon: null,
    temperature: '16',
  },
  {
    day: 'Sunday',
    icon: null,
    temperature: '16',
  },
];

export type TTodayForecastMockData = [
  { temp: number },
  { icon: string, description: string },
  { speed: number, deg: number },
  { humidity: number },
  { pressure: number },
  { sunrise: number, sunset: number },
];

export const todayForecastMockData: TTodayForecastMockData = [
  { temp: 13 },
  { icon: 'wi-day-thunderstorm', description: 'windy' },
  { speed: 12, deg: 15 },
  { humidity: 1 },
  { pressure: 12 },
  { sunrise: 12, sunset: 19 }
];
