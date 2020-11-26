import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
// API
import { getOptions } from '../api';
// Types
import { DataApi, FETCH_INFOS } from '../../types';

const options = getOptions('info');

export const loadInfos = () => async (dispatch: Dispatch) => {
  const response: AxiosResponse<DataApi> = await axios.get(options.url, options);

  dispatch({
    type: FETCH_INFOS,
    payload: { infos: response.data },
  });
};
