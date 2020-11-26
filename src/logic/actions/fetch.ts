import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { getOptions } from '../api';
import { DataApi } from '../../definitions/interfaces';

const options = getOptions('info');
console.log(
  '%c☘ %coptions%c:',
  'font-weight:bold;color: #0F9D58;font-size:1.2em;',
  'font-weight:bold;border-bottom:2px solid #0F9D58;',
  'font-weight:bold;',
  options
);

export const loadInfos = () => async (dispatch: Dispatch) => {
  const response: AxiosResponse<DataApi> = await axios.get(options.url, options);

  dispatch({
    type: 'FETCH_INFOS',
    payload: { infos: response.data },
  });
};
