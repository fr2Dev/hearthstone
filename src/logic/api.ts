import { FetchOptions } from '../definitions/interfaces';
export const key = process.env.REACT_APP_API_KEY;

const baseUrl = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/';

export const getOptions = (param: string): FetchOptions => ({
  method: 'GET',
  url: `${baseUrl}${param}`,
  headers: {
    'x-rapidapi-key': key as string,
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  },
});
