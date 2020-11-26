import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { getOptions } from '../api';

interface DataApi {
  data: {};
  config: {};
  headers: {};
  request: {};
  status: number;
  statusText: string;
}

const options = getOptions('info');
console.log(
  '%c☘ %coptions%c:',
  'font-weight:bold;color: #0F9D58;font-size:1.2em;',
  'font-weight:bold;border-bottom:2px solid #0F9D58;',
  'font-weight:bold;',
  options
);

export const loadInfos = () => async (dispatch: Dispatch) => {
  const hsData: AxiosResponse<DataApi> = await axios.get(options.url, options as any);
  console.log(
    '%c☘ %chsData%c:',
    'font-weight:bold;color: #0F9D58;font-size:1.2em;',
    'font-weight:bold;border-bottom:2px solid #0F9D58;',
    'font-weight:bold;',
    hsData
  );

  dispatch({
    type: 'FETCH_INFOS',
    payload: { infos: hsData.data },
  });
};
